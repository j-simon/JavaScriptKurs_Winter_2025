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
    $('#products > tbody').appendChild(tr([td(product.name), td(product.price), tdWithActionButtons()]));

  const tdWithActionButtons = () => {
    const td = document.createElement('td');
    td.appendChild(removeButton());
    td.appendChild(moveUpButton());
    td.appendChild(moveDownButton());
    return td;
  };

  const removeButton = () => {
    const button = document.createElement('button');
    button.textContent = 'x';
    button.classList.add('remove_product');
    $on(button, 'click', removeProduct);
    return button;
  };

  const moveUpButton = () => {
    const button = document.createElement('button');
    button.textContent = '↑';
    button.classList.add('move_product_up');
    $on(button, 'click', moveProductUp);
    return button;
  };

  const moveDownButton = () => {
    const button = document.createElement('button');
    button.textContent = '↓';
    button.classList.add('move_product_down');
    $on(button, 'click', moveProductDown);
    return button;
  };

  const removeProduct = (event) => productRowForAction(event.target).remove();

  const moveProductUp = (event) => {
    const currentProductRow = productRowForAction(event.target);
    currentProductRow.parentNode.insertBefore(currentProductRow, currentProductRow.previousElementSibling);
  };

  const moveProductDown = (event) => {
    const currentProductRow = productRowForAction(event.target);
    currentProductRow.parentNode.insertBefore(
      currentProductRow,
      currentProductRow.nextElementSibling.nextElementSibling
    );
  };

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
