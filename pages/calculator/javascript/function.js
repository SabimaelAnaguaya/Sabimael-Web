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

    return (base * altura)/2;
}
console.groupEnd();

console.group("Circulo")

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI
}

function areaCirculo(radio){
    return (radio * radio)* Math.PI;
}

console.groupEnd();

// HTML A JAVASCRIPT

//Calculando el Perimetro y Area del Cuadrado
function calcularPerimetroAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const perimetroCalc = document.getElementById("resultPerimeter");
    const areaCalc = document.getElementById("resultArea");

    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    perimetroCalc.innerText = perimetro;
    areaCalc.innerText = area;
}


//Calculando el Perimetro y Area de un Triangulo

function calcularPerimetroTriangulo(){
    const ladoT1 =  document.getElementById("inputLadoTriangulo1");
    const ladoT2 =  document.getElementById("inputLadoTriangulo2");
    const base =  document.getElementById("inputBaseTriangulo");

    const valueLado1 = ladoT1.value;
    const valueLado2 = ladoT2.value;
    const valueBase =  base.value;

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const ladoT1 = document.getElementById("inputLadoTriangulo1");
    const ladoT2 = document.getElementById("inputLadoTriangulo2");
    const base = document.getElementById("inputBaseTriangulo");

    const valueLado1 = ladoT1.value;
    const valueLado2 = ladoT2.value;
    const valueBase = base.value;

    const areaT = areaTriangulo(valueLado1, valueLado2, valueBase);

    alert(areaT);
}

//Calcular area y Perimetro del Circulo.

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputRadio");

    const valueRadio = radioCirculo.value;

    const perimetro = perimetroCirculo(valueRadio);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("inputRadio");
    const valueRadio = radioCirculo.value;
    const area = areaCirculo(valueRadio);

    alert(area);
}