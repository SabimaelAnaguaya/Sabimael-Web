var numero = document.getElementById("inputNumber");

function addNum (num){
    let newNum = numero.value;
    numero.value = newNum + num;
}

function getResult(){
    let result = numero.value;
    numero.value = eval(result);

}

function erase(){
    let eraseDig = numero.value;
    numero.value = eraseDig.substring(0, eraseDig.length - 1);
}

function eraseAll(){
    numero.value = ""
}