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

  const addProduct = (product) => {
    $('#products > tbody').appendChild(tr([td(product.name), td(product.price), tdWithActionButtons()]));
    disableNonFunctionalButtons();
  };

  const tdWithActionButtons = () => {
    const td = document.createElement('td');
    td.appendChild(removeButton());
    td.appendChild(moveUpButton());
    td.appendChild(moveDownButton());
    return td;
  };

  const removeButton = () => buildButton('x', 'remove_product', removeProduct);
  const moveUpButton = () => buildButton('↑', 'move_product_up', moveProductUp);
  const moveDownButton = () => buildButton('↓', 'move_product_down', moveProductDown);

  const removeProduct = (event) => productRowForAction(event.target).remove();
  const moveProductUp = (event) => moveProduct(event, up);
  const moveProductDown = (event) => moveProduct(event, down);

  const moveProduct = (event, direction) => {
    const currentProductRow = productRowForAction(event.target);
    currentProductRow.parentNode.insertBefore(currentProductRow, direction(currentProductRow));
  };

  const down = (el) => el.nextElementSibling.nextElementSibling;
  const up = (el) => el.previousElementSibling;

  const productRowForAction = (button) => button.parentNode.parentNode;

  const buildButton = (symbol, cssClass, action) => {
    const button = document.createElement('button');
    button.textContent = symbol;
    button.classList.add(cssClass);
    $on($on(button, 'click', action), 'click', disableNonFunctionalButtons);
    return button;
  };

  const disableNonFunctionalButtons = () =>
    $$('#products > tbody > tr').forEach((tr) => {
      tr.querySelector('.move_product_up').disabled = !tr.previousElementSibling;
      tr.querySelector('.move_product_down').disabled = !tr.nextElementSibling;
    });

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
