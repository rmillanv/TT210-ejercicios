// trae los elementos del DOM
entrada = document.getElementById("numero")
otraentrada = document.getElementById("otronumero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")
// inicializando variables, van a esta altura para que todos las puedan usar
let numero = 0
let otronumero = 0
//captura los numero desde el navegador
entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
})
otraentrada.addEventListener("input",(evento)=>{
    otronumero= evento.target.value
})

//creo la funcion de multiplicacion 

function multiplicacion(parametro,otroparametro){
    return parametro*otroparametro
}
//uso la funcion multiplicacion cuando le doy click al boton y creo el elemento h3 y lo agrego 
btn.addEventListener("click",()=>{
    resultado = multiplicacion(numero,otronumero)
    let hijo = document.createElement("h3")
    hijo.innerHTML = `el resultado de ${numero}x${otronumero} es ${resultado}`
    salida.appendChild(hijo)
})


let resultado=multiplicacion(10,5)
console.log(resultado)