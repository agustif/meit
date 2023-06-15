import PropertyType from '../types/Property';
import PropertyItem from './PropertyItem';
import PDFButton from './PDFButton';
import { downloadPDF } from '../utils/pdfUtils';

interface PropertyListProps {
  properties: PropertyType[];
  deleteProperty: (propertyId: number) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, deleteProperty }) => {
  // Sort properties by price
  const sortedProperties = [...properties].sort((a, b) => a.price - b.price);

  // This function will be passed to the PDFButton component
  const handleDownloadPDF = () => {
    downloadPDF(sortedProperties);
  };

  return (
    <>
      <div className="list-title">
      <h2>List - Sorted by Price</h2>
      <PDFButton disabled={sortedProperties.length <= 0} onClick={handleDownloadPDF} />
      </div>
      {sortedProperties.map((property: PropertyType, index) => (
        <ol key={property.id}>
          <PropertyItem
            key={property.id}
            property={property}
            deleteProperty={deleteProperty}
          />
        </ol>
      ))}
      </>
  );
};

export default PropertyList;
