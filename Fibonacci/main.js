//traer los elementos del DOM
entrada = document.getElementById("numero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")
// inicializando variables, van a esta altura para que las puedan usar en todo el codigo 
let numero = 0
let fibo = [0,1]
// captura los numero desde el navegador 
entrada.addEventListener("input",(evento) =>{
    numero = evento.target.value
})

//funcion calcular el array de fibonacci

function calcularfibo(n){
    if(n==0){
        fibo = [0]
    }else if(n==1){
        fibo = [0,1]
    }else{
        for(i =2;i<=n;i++){
            fibo[i]=fibo[i-1]+fibo[i-2]
        }
    }
    return fibo

}
console.log(calcularfibo(5))

btn.addEventListener("click",()=>{
    resultado = calcularfibo(numero)
    console.log(resultado)
    let hijo = document.createElement("h3")
    hijo.innerHTML = `la serie de fibonacci del ${numero} es ${resultado}`
    salida.appendChild(hijo)
})