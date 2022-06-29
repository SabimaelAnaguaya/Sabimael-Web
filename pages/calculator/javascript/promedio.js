function calcularPrecioDescuento(precio, descuento){
    const precioDescuento = (precio*(100-descuento))/100;
    return precioDescuento;
}

function calcularPrecioTotal(){
    const price = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount");
    const resultP = document.getElementById("resultPrice");

    const valuePrice = price.value;
    const valueDiscount = discount.value;

    const precioT = calcularPrecioDescuento(valuePrice, valueDiscount);
    resultP.innerText = precioT;
    
}