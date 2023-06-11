import PropertyType from '../types/Property';
import DeleteButton from './DeleteButton';

interface PropertyItemProps {
  property: PropertyType;
  deleteProperty: (propertyId: number) => void;
}

const PropertyItem: React.FC<PropertyItemProps> = ({ property, deleteProperty }) => {
  const handleDelete = () => {
    deleteProperty(property.id);
  };

  return (
    <li>
      <h3>{property.title}</h3>
      <p>Rooms: {property.rooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Price: {property.price}</p>
      <DeleteButton onDelete={handleDelete} />
    </li>
  );
};

export default PropertyItem;
