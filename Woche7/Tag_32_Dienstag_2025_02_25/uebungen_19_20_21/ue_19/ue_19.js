'use strict';

const li = document.createElement("li")


li.textContent = "Capacity: 11 oz.";
// li.innerHTML = "Capacity: 11 oz.";
// li.innerText = "Capacity: 11 oz.";

console.log('li --->', li);

document.getElementById("product_specification").appendChild(li)


const option = document.createElement("option")


option.textContent = "5 items";
document.querySelector("select").appendChild(option)

// document.querySelector('#buy_form select').innerHTML += '<option>5 items</option>';
