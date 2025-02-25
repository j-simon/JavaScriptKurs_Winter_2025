import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let dataPath = path.resolve(__dirname, 'products.json');

const saveProduct = (product) => {
  const products = loadAllProducts();
  products.push(product);
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
};

const loadAllProducts = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const loadProduct = (id) => {
  const products = loadAllProducts();
  return products.find((product) => product.id === id);
};

const updateProduct = (id, product) => {
  const products = loadAllProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...product, id };
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
  }
};

const deleteProduct = (id) => {
  const products = loadAllProducts();
  const filteredProducts = products.filter((product) => product.id !== id);
  fs.writeFileSync(dataPath, JSON.stringify(filteredProducts, null, 2));
};

const setDataPath = (newDataPath) => {
  dataPath = newDataPath;
};

export default {
  saveProduct,
  loadAllProducts,
  loadProduct,
  updateProduct,
  deleteProduct,
  setDataPath,
};
