'use strict';

{
  const init = () => {
    $on($('#add_product'), 'click', addProductFromInput);
  };

  const addProductFromInput = () => addProduct($('#new_product .name').value, $('#new_product .price').value);

  const addProduct = (name, price) => $('#products > tbody').appendChild(tr([td(name), td(price)]));

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
