import { useState } from 'react';
import Header from './components/Header';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import PropertyType from './types/Property';
import './App.css';
function App() {
  // Here we store properties in state, as an array of PropertyType objects
  // This could be a call to our API instead of an empty array
  // when we start using a database
  const [properties, setProperties] = useState<PropertyType[]>([]);

  // This function will be passed to the PropertyForm component
  // and will allow us to add a new property to the list
  const addProperty = (property: PropertyType) => {
    setProperties([...properties, property]);
  };

  // This function will be passed to the PropertyList component
  // and will allow us to delete a property from the list
  const deleteProperty = (propertyId: number) => {
    const updatedProperties = properties.filter((property) => property.id !== propertyId);
    setProperties(updatedProperties);
  };

  return (
    <div className="App">
      <Header />
      <PropertyForm addProperty={addProperty} />
      <PropertyList properties={properties} deleteProperty={deleteProperty} />
    </div>
  );
}

export default App;
