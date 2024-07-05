
function quantBtnEvent(btnId, inputId, action){
    const btn = document.getElementById(btnId);
    btn.addEventListener("click", ()=>{
        const inputStr = document.getElementById(inputId);
        if (action == "plus"){
            inputStr.value = Number(inputStr.value) + 1;
        }
        else if (action == "minus"){
            inputStr.value = Number(inputStr.value) - 1;
        }
        priceAdjustment();
    });
}


function priceAdjustment(){
    let proQuant1 = Number(document.getElementById("proQuant1").value);
    const price1 = proQuant1 * 1399.00;
    document.getElementById("price1").innerText = price1.toFixed(2);

    let proQuant2 = Number(document.getElementById("proQuant2").value);
    const price2 = proQuant2 * 59.00;
    document.getElementById("price2").innerText = price2.toFixed(2);

    const subTotal = price1 + price2;
    document.getElementById("subtotalPrice").innerText = subTotal.toFixed(2);

    const tax = subTotal * 0.075;
    document.getElementById("taxAmount").innerText = tax.toFixed(2);

    const totalPrice = subTotal + tax;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
}


quantBtnEvent("minusBtn1", "proQuant1", "minus");
quantBtnEvent("plusBtn1", "proQuant1", "plus");
quantBtnEvent("minusBtn2", "proQuant2", "minus");
quantBtnEvent("plusBtn2", "proQuant2", "plus");


priceAdjustment();

