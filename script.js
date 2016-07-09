var totalTotal = 0;
var subtotal = 0;


function addItem() {
	var item = document.getElementById("item-name").value;
	var price = document.getElementById("item-price").value;
	var quant = document.getElementById("item-quantity").value;
	var itemTotal = Number(price * quant);
	document.getElementById('list').innerHTML += "<li>" + item + "<span class='not-important'> x " + quant + "</span>: $ " + itemTotal.toFixed(2) + "</li>";
	subtotal += itemTotal;
	var tax = subtotal * 0.06;
	totalTotal = subtotal + tax;
	document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);
	document.getElementById('tax').innerHTML = tax.toFixed(2);
	document.getElementById('total').innerHTML = totalTotal.toFixed(2);
	document.getElementById('item-name').value = "";
	document.getElementById('item-price').value = "";
	document.getElementById('item-quantity').value = 1;
};