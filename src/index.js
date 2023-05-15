import { Table } from './table.js';
import { products } from './product.js';

document.addEventListener("DOMContentLoaded", function() {
  const table = new Table({ data: products });

  const app = document.getElementById("app");
  table.render(app);
});