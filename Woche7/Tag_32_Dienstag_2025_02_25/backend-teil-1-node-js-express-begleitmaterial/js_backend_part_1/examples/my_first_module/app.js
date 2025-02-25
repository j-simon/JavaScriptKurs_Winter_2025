// import productManager from './module/es6/product_manager/ProductManager.js';
const productManager = require('./module/commonjs/product_manager/ProductManager');

productManager.setDataPath('./data/products.json');

productManager.saveProduct({
  id: 1,
  name: 'Product 1',
  price: 9.99,
  description: 'A great product',
});
productManager.saveProduct({
  id: 2,
  name: 'Product 2',
  price: 19.99,
  description: 'Another great product',
});
productManager.saveProduct({
  id: 3,
  name: 'Product 3',
  price: 29.99,
  description: 'Yet another great product',
});

console.log(productManager.loadAllProducts());
