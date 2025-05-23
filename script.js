let input= document.querySelector("input")
function addValue(elementval){
    input.value += elementval
}

function clearVal(){
    input.value =""
}

function deleteVal(){
    input.value = input.value.slice(0,input.value.length-1)
}

function equal(){
    input.value = eval(input.value)
}