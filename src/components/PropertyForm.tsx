import React, { useState } from 'react';
import PropertyType from '../types/Property';

interface PropertyFormProps {
  addProperty: (property: PropertyType) => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ addProperty }) => {
  const [title, setTitle] = useState('');
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(0);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRooms(parseInt(e.target.value));
  };

  const handleBathroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBathrooms(parseInt(e.target.value));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProperty: PropertyType = {
      id: Date.now(),
      title,
      rooms,
      bathrooms,
      price,
    };

    addProperty(newProperty);

    // Reset form fields
    setTitle('');
    setRooms(0);
    setBathrooms(0);
    setPrice(0);
  };

  return (
    <section>
      <h2>Add a new property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} required />
        </label>
        <label>
          Rooms:
          <input type="number" value={rooms} onChange={handleRoomsChange} required />
        </label>
        <label>
          Bathrooms:
          <input type="number" value={bathrooms} onChange={handleBathroomsChange} required />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} required />
        </label>
        <button  className="button" type="submit">Add</button>
      </form>
    </section>
  );
};

export default PropertyForm;
