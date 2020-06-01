import * as PdfPrinter from 'pdfmake';
import { img } from './images/gatsby';

const fonts = {
  Roboto: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  }
};

const printer = new PdfPrinter(fonts);

const options = {
};

export function generate(book) {
  const docDefinition = {
    content: [
      { text: book.title, fontSize: 24, alignment: 'center', margin: [ 0, 0, 0, 20 ]},
      {
        columns: [
          {
            width: '30%',
            stack: [
              {
                image: img,
                fit: [200, 200],
              },
            ],
          },
          {
            width: 'auto',
            lineHeight: 1.5,
            text: book.description
          },
        ],
        // optional space between columns
        columnGap: 10
      },
    ],
    images: {
      imgs: ''
    },
  };

  return printer.createPdfKitDocument(docDefinition, options);
}




