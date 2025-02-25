'use strict';

{
  const init = () => {
    addExistingProducts(PRODUCTS);
    $on($('#add_product'), 'click', addProductFromInput);
  };

  const addExistingProducts = () => PRODUCTS.forEach(addProduct);

  const addProductFromInput = () =>
    addProduct({
      name: $('#new_product .name').value,
      price: $('#new_product .price').value,
    });

  const addProduct = (product) =>
    $('#products > tbody').appendChild(tr([td(product.name), td(product.price), tdWithRemoveButton()]));

  const tdWithRemoveButton = () => {
    const td = document.createElement('td');
    td.appendChild(removeButton());
    return td;
  };

  const removeButton = () => {
    const button = document.createElement('button');
    button.textContent = 'x';
    button.classList.add('remove_product');
    $on(button, 'click', removeProduct);
    return button;
  };

  const removeProduct = (event) => productRowForAction(event.target).remove();

  const productRowForAction = (button) => button.parentNode.parentNode;

  const td = (text) => {
    const tdNode = document.createElement('td');
    tdNode.textContent = text;
    return tdNode;
  };

  const tr = (tds) => {
    const trNode = document.createElement('tr');
    tds.forEach((td) => trNode.appendChild(td));
    return trNode;
  };

  init();
}
