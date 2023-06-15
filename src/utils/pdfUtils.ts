import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Property from '../types/Property';
import { Margins, TDocumentDefinitions, ContentColumns, ContentUnorderedList } from 'pdfmake/interfaces';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const downloadPDF = (properties: Property[]) => {
  // Define the document definition for PDFMake
  const documentDefinition: TDocumentDefinitions = {
    content: [
      {
        image: 'logo',
        width: 200,
        height: 100,
        absolutePosition: { x: 380, y: 20 },
      },
      { text: 'Properties List', style: 'header' },
      { text: 'by price', style: 'subheader' },
      { text: '\n' }, // Add line break

      // Generate a list of properties
      ...properties.flatMap((property: Property, index) => [
        {
          columns: [
            {
              image: 'thumbnail',
              width: 180,
              height: 100,
              alignment: 'left', // Align thumbnail image to the left
            },
            {
              width: '*',
              stack: [
                { text: `${index + 1} - ${property.title}`, style: 'propertyTitle' },
                '\n',
                `${property.rooms} habitaciones`,
                `${property.bathrooms} baño`,
                {
                  text: `${property.price}€/mes`,
                  style: 'propertyPrice',
                },
              ],
            },
          ],
          columnGap: 10, // Add gap between thumbnail and property details
          marginBottom: 12, // Add margin at the bottom of each property
        },
        { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 495, y2: 5 }] }, // Add line break separator
        // add blank space
        { text: '\n' },
      ]),
    ] as unknown as (ContentColumns | ContentUnorderedList | { canvas: any })[],
    images: {
      thumbnail: 'https://source.unsplash.com/random/180x100?house,empty',
      // FIXME: replace localhost for ENV var for vercel deployment.
      logo: 'http://localhost:3000/logo.png',
    },
    styles: {
      header: {
        fontSize: 24,
        bold: true,
        marginTop: 128,
        marginBottom: 10,
      },
      subheader: {
        fontSize: 14,
        bold: false,
        marginTop: -28,
        marginLeft: 168,
        marginBottom: 20,
      },
      propertyTitle: {
        fontSize: 18,
        color: 'black',
        background: '#FFA500',
        bold: true,
      },
      propertyPrice: {
        fontSize: 14,
        bold: true,
        margin: [0, 5, 0, 10],
      },
      thumbnailImage: {},
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
