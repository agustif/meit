import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from './App';

const addProperty = () => {
  // Fill out the form
  userEvent.type(screen.getByLabelText(/title/i), 'Piso en calle de la Libertad, 6, Madrid');
  userEvent.type(screen.getByLabelText('Rooms:'), '3');
  userEvent.type(screen.getByLabelText(/bathrooms/i), '2');
  userEvent.type(screen.getByLabelText(/price/i), '900');
  fireEvent.click(screen.getByText("Add"));
};

test('adds a property via the form and displays it in the list', () => {
  render(<App />);

  // Add a property
  addProperty();

  // Submit the form
  fireEvent.click(screen.getByText('Add'));

  // Check if the property appears in the list
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByText(/3 habitaciones/i)).toBeInTheDocument();
  expect(screen.getByText(/2 baños/i)).toBeInTheDocument();
  expect(screen.getByText(/900/i)).toBeInTheDocument();
});

test('deletes a property and confirms deletion', () => {
  render(<App />);

  // Add a property
  addProperty();

  // Check if the property appears in the list
  expect(screen.getByText(/Piso en calle de la Libertad, 6, Madrid/i)).toBeInTheDocument();

  // Click the delete button
  fireEvent.click(screen.getByRole('button', { name: /Delete item/i }));

  // Confirm the deletion
  fireEvent.click(screen.getByRole('button', { name: /confirm/i }));

  // Check if the property is removed from the list
  expect(screen.queryByText(/Piso en calle de la Libertad, 6, Madrid/i)).not.toBeInTheDocument();
});
