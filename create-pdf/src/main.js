import { createPdf } from './pdf.js';
import {generateOrder} from "./order.js";

export default async ({ res, log }) => {
  const order = generateOrder()
  log(`Generated order: ${JSON.stringify(order, null, 2)}`);

  const pdfBuffer = await createPdf(order);
  log('PDF created.');

  return res.send(pdfBuffer, 200, { 'Content-Type': 'application/pdf' });
};
