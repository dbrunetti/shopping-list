var totalTotal = 0;
var subtotal = 0;
var counter = 0;
var shoppingList = [];

function addItemToList() {
	var item = document.getElementById("add-name").value;
	document.getElementById("on-list").innerHTML += "<li class='grocery-item' id='" + counter + "'>" + item + "</li>";
	document.getElementById(counter).getAttribute("onclick");
	document.getElementById(counter).setAttribute("onclick", "clickToPopulate(" + counter + ")");
	shoppingList.push(item = {
		name: item,
		index: counter
	});
	counter++;
	document.getElementById("add-name").value = "";
}

function clickToPopulate(thisIndex) {
	document.getElementById('item-name').value = shoppingList[thisIndex].name;
};

function addItemToCart() {
	var item = document.getElementById("item-name").value;
	var price = document.getElementById("item-price").value;
	var quant = document.getElementById("item-quantity").value;
	var itemTotal = Number(price * quant);
	document.getElementById('cart-list').innerHTML += "<li>" + item + "<span class='not-important'> x" + quant + "</span>: $ " + itemTotal.toFixed(2) + "</li>";
	subtotal += itemTotal;
	var tax = subtotal * 0.06;
	totalTotal = subtotal + tax;
	checkList();
	document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);
	document.getElementById('tax').innerHTML = tax.toFixed(2);
	document.getElementById('total').innerHTML = totalTotal.toFixed(2);
	document.getElementById('item-name').value = "";
	document.getElementById('item-price').value = "";
	document.getElementById('item-quantity').value = 1;
};

function checkList() {
	for (var i = 0; i < shoppingList.length; i++) {
		if (shoppingList[i].name == document.getElementById('item-name').value) {
			// cross out item on list
			document.getElementById(i).style.setProperty("text-decoration", "line-through");
		};
	};
};



