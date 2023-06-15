import PropertyType from '../types/Property';
import DeleteButton from './DeleteButton';

interface PropertyItemProps {
  property: PropertyType;
  key: number;
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
          <p>{property.rooms} Habitaciones</p>
          <p>{property.bathrooms} Baños</p>
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
