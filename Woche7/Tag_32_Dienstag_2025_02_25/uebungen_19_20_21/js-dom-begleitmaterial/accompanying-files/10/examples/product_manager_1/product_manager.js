'use strict'

{
    const init = () => {
        $on($('#add_product'), 'click', addProduct)
    }

    const addProduct = () => {
        const valueTd = document.createElement('td')
        valueTd.textContent = $('#new_product .name').value

        const priceTd = document.createElement('td')
        priceTd.textContent = $('#new_product .price').value

        const productTr = document.createElement('tr')
        productTr.appendChild(valueTd)
        productTr.appendChild(priceTd)

        $('#products > tbody').appendChild(productTr)
    }

    init()
}
