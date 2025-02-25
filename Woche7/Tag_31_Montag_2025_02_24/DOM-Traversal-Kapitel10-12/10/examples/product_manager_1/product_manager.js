// 'use strict'

// {
//     const init = () => {
//         $on($('#add_product'), 'click', addProduct)
//     }

//     const addProduct = () => {
//         const valueTd = document.createElement('td')
//         valueTd.textContent = $('#new_product .name').value

//         const priceTd = document.createElement('td')
//         priceTd.textContent = $('#new_product .price').value

//         const productTr = document.createElement('tr')
//         productTr.appendChild(valueTd)
//         productTr.appendChild(priceTd)

//         $('#products > tbody').appendChild(productTr)
//     }

//     init()
// }









const newTr = document.createElement(("tr"));
newTr.id="add";
// console.log(newTr);

const newTd1=document.createElement(("td"));
newTd1.textContent="Teller";
// console.log(newTd);
const newTd2=document.createElement(("td"));
newTd2.textContent="1.02";

newTr.appendChild(newTd1); // anfügen als letztes
newTr.appendChild(newTd2); // <tr><td></td><td></td></tr>
console.log(newTr)


// $("tbody").appendChild(newTr) // hinten an andere trs anhängen

$("tbody").insertBefore(newTr,$("tbody").children[1])

 $("#add").remove()









