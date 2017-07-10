var array01 = [];
array01.splice(0, 0);
console.log(array01);


var x = 0;

function addItemFunc(){

    console.log("x = " + x);

    var newItem = document.getElementById('addText').value;
    var newPrice = document.getElementById('priceText').value;
    var newQuant = document.getElementById('quantText').value;
    newPrice = parseInt(newPrice);
    newQuant = parseInt(newQuant);
    
    
    if(typeof newPrice == 'number'){
        array01.push({
            name: newItem,
            price: newPrice,
            quantity: newQuant
        });
    }     
    
    console.log(array01);
    
// insert action to make seperate div for each property here

    runTotal();
    
    var subTotal;
    function runTotal() {
        subTotal = 0;
        array01.forEach(function (food) {
            subTotal += food.price;
            // console.log(food.price);

        });
    };
    
    
    var salesTax = .06;
    var newTax = ((subTotal * newQuant) * .06);
    var total = (newQuant * newPrice) + newTax;
    var finalTotal = total + newQuant * newPrice;
    console.log("final: " + finalTotal);

    console.log("new tax: " + newTax);

    console.log(newQuant);
    console.log("Sub-Total: " + "$ " + (subTotal));
    console.log("Sales Tax: " + "$ " + ((subTotal * newQuant) * .06).toFixed(2));
    console.log("Total: " + "$ " + total.toFixed(2));
    runTotal();
    
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "Item: " + newItem + " | Price: $ " + newPrice.toFixed(2) + " | Quantity: " + newQuant;
    newDiv.setAttribute('class', 'listClass');
    document.getElementById("mainBox").appendChild(newDiv);
    document.getElementById("divTotal").innerHTML = "$ " + total.toFixed(2);
    document.getElementById("addText").value = "Item Name";
    document.getElementById("priceText").value = "Item Price";
    document.getElementById("quantText").value = "Quantity";

};