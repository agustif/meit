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
      <div className='property-item-container'>
        <div className='item-details'>
          <h3>{property.title}</h3>
          <p>Rooms: {property.rooms} - Bathrooms: {property.bathrooms}</p>
        </div>
        <div className='item-right-column'>
        <p>{property.price} €</p>
        <DeleteButton onDelete={handleDelete} />
        </div>
      </div>
    </li>
  );
};

export default PropertyItem;
