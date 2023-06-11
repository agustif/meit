import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Property from '../types/Property';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const downloadPDF = (properties: Property[]) => {
  // Define the document definition for PDFMake
  const documentDefinition = {
    content: [
      { text: 'Property List', style: 'header' },
      { text: 'Sorted by price', style: 'subheader' },
      { text: '\n' }, // Add line break

      // Generate a table for properties
      {
        table: {
          headerRows: 1,
          widths: ['auto', 'auto', 'auto', 'auto'],
          body: [
            ['Title', 'Rooms', 'Bathrooms', 'Price'],
            ...properties.map((property: Property) => [
              property.title,
              property.rooms.toString(),
              property.bathrooms.toString(),
              property.price.toString(),
            ]),
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        marginBottom: 10,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        marginBottom: 5,
      },
    },
  };

  // Generate and download the PDF document
  const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
  pdfDocGenerator.download('property_list.pdf');
  const blob = pdfDocGenerator.getBlob((blob) => {
    console.log(blob);
    return blob;
}); 
return blob;
};

export { downloadPDF };
