function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }

console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);
    return perimetro;
}

function areaTriangulo (lado1, lado2, base){
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const s = (parseFloat(perimetro))/2;
    const interno = s*((s-lado1)*(s-lado2)*(s-base));
    const raiz = Math.sqrt(interno);
    const altura = (2/lado2) * raiz;

    return trunc((base * altura)/2, 2);
}
console.groupEnd();

console.group("Circulo")

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return trunc(diametro * Math.PI, 2);
}

function areaCirculo(radio){
    return trunc((radio * radio)* Math.PI, 2);
}

console.groupEnd();

// HTML A JAVASCRIPT

//Calculando el Perimetro y Area del Cuadrado
function calcularPerimetroAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    let perimetroCalc = document.getElementById("resultPerimeterCua");
    let areaCalc = document.getElementById("resultAreaCua");

    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    perimetroCalc.innerText = perimetro+" cm";
    areaCalc.innerText = area+" cm2";
}


//Calculando el Perimetro y Area de un Triangulo

function calcularPerimetroAreaTriangulo(){
    const ladoT1 =  document.getElementById("inputLadoTriangulo1");
    const ladoT2 =  document.getElementById("inputLadoTriangulo2");
    const base =  document.getElementById("inputBaseTriangulo");

    let perimetroCalc = document.getElementById("resultPerimeterTri");
    let areaCalc = document.getElementById("resultAreaTri");
    
    const valueLado1 = ladoT1.value;
    const valueLado2 = ladoT2.value;
    const valueBase =  base.value;

    let perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    let areaT = areaTriangulo(valueLado1, valueLado2, valueBase);

    perimetroCalc.innerText = perimetro;
    areaCalc.innerText =areaT;
}


//Calcular area y Perimetro del Circulo.

function calcularPerimetroAreaCirculo(){
    const radioCirculo = document.getElementById("inputRadio");

    let perimetroCalc = document.getElementById("resultPerimeterCir");
    let areaCalc = document.getElementById("resultAreaCir");
        
    const valueRadio = radioCirculo.value;

    let perimetro = perimetroCirculo(valueRadio);
    let area = areaCirculo(valueRadio);

    perimetroCalc.innerText = perimetro;
    areaCalc.innerText =area;
}

