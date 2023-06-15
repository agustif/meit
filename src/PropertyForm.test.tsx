import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PropertyForm from './components/PropertyForm';

test('should add properties to the form', () => {
  // Arrange
  const addPropertyMock = jest.fn();
  render(<PropertyForm addProperty={addPropertyMock} />);

  // Act
  const titleInput = screen.getByLabelText('Title:');
  const roomsInput = screen.getByLabelText('Rooms:');
  const bathroomsInput = screen.getByLabelText('Bathrooms:');
  const priceInput = screen.getByLabelText('Price:');
  const addButton = screen.getByText('Add');

  fireEvent.change(titleInput, { target: { value: 'Beautiful Apartment' } });
  fireEvent.change(roomsInput, { target: { value: '3' } });
  fireEvent.change(bathroomsInput, { target: { value: '2' } });
  fireEvent.change(priceInput, { target: { value: '250000' } });
  fireEvent.click(addButton);

  // Assert
  expect(addPropertyMock).toHaveBeenCalledTimes(1);
  expect(addPropertyMock).toHaveBeenCalledWith({
    id: expect.any(Number),
    title: 'Beautiful Apartment',
    rooms: 3,
    bathrooms: 2,
    price: 250000,
  });
});
