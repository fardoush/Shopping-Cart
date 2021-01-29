//  card item 1 ==========
let product1_price = parseFloat(document.getElementById('price-one').innerText) / parseFloat(document.getElementById('quantity-one').value);

document.getElementById('increment-one').addEventListener('click', function() {
    let quantity = parseFloat(document.getElementById('quantity-one').value);
    let sub_total = parseFloat(document.getElementById('subtotal').innerText);
    quantity++;

    let tax = document.getElementById('tax').value;
    document.getElementById('decrement-one').disabled = false;
    document.getElementById('quantity-one').value = quantity;
    document.getElementById('price-one').innerText = product1_price * quantity;
    document.getElementById('subtotal').innerText = sub_total + product1_price;
    document.getElementById('total').innerText = sub_total + product1_price;

});

document.getElementById('decrement-one').addEventListener('click', function() {
    let quantity = parseFloat(document.getElementById('quantity-one').value);
    let sub_total = parseFloat(document.getElementById('subtotal').innerText);
    quantity--;
    if (quantity == 0) {
        document.getElementById('quantity-one').value = quantity;
        document.getElementById('price-one').innerText = product1_price * quantity;
        document.getElementById('subtotal').innerText = sub_total - product1_price;
        document.getElementById('total').innerText = sub_total - product1_price;
        document.getElementById('decrement-one').disabled = true;
    } else {
        document.getElementById('quantity-one').value = quantity;
        document.getElementById('price-one').innerText = product1_price * quantity;
        document.getElementById('subtotal').innerText = sub_total - product1_price;
        document.getElementById('total').innerText = sub_total + product1_price;
    }
});

document.getElementById('remove-one').addEventListener('click', function() {
    let card1 = document.getElementById('product-one');
    let current_price = parseFloat(document.getElementById('price-one').innerText);
    let sub_total = parseFloat(document.getElementById('subtotal').innerText);
    card1.style.display = 'none';
    document.getElementById('subtotal').innerText = sub_total - current_price;
    document.getElementById('total').innerText = sub_total - current_price;
});


//  card item 1 ==========
let product2_price = parseFloat(document.getElementById('price-two').innerText) / parseFloat(document.getElementById('quantity-two').value);

document.getElementById('increment-two').addEventListener('click', function() {
    let quantity = parseFloat(document.getElementById('quantity-two').value);
    let sub_total = parseFloat(document.getElementById('subtotal').innerText);
    quantity++;
    document.getElementById('decrement-two').disabled = false;
    document.getElementById('quantity-two').value = quantity;
    document.getElementById('price-two').innerText = product2_price * quantity;
    document.getElementById('subtotal').innerText = sub_total + product2_price;
    document.getElementById('total').innerText = sub_total + product2_price;
});

document.getElementById('decrement-two').addEventListener('click', function() {
    let quantity = parseFloat(document.getElementById('quantity-two').value);
    let sub_total = parseFloat(document.getElementById('subtotal').innerText);
    quantity--;
    if (quantity == 0) {
        document.getElementById('quantity-two').value = quantity;
        document.getElementById('price-two').innerText = product2_price * quantity;
        document.getElementById('subtotal').innerText = sub_total - product2_price;
        document.getElementById('total').innerText = sub_total - product2_price;
        document.getElementById('decrement-two').disabled = true;
    } else {
        document.getElementById('quantity-two').value = quantity;
        document.getElementById('price-two').innerText = product2_price * quantity;
        document.getElementById('subtotal').innerText = sub_total - product2_price;
        document.getElementById('total').innerText = sub_total - product2_price;
    }
})

document.getElementById('remove-two').addEventListener('click', function() {
    let card2 = document.getElementById('product-two');
    let current_price = parseFloat(document.getElementById('price-two').innerText);
    let sub_total = parseFloat(document.getElementById('subtotal').innerText);
    card2.style.display = 'none';
    document.getElementById('subtotal').innerText = sub_total - current_price;
    document.getElementById('total').innerText = sub_total - current_price;
})