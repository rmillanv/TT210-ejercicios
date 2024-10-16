
// inicializando variables, van a esta altura para que las puedan usar en todo el codigo 
let numero = 0;
let elemento1 = 0;
let elemento2 = 1;

//funcion calcular el array de fibonacci

function calcularfibo(n) {
    let fibo = [];
    if (n == 0) {
        fibo = [0];
    } else if (n == 1) {
        fibo = [0,1];
    } else {
        fibo = [elemento1, elemento2];
        for (let i = 2; i < n; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
    }
    return fibo;
}
console.log(calcularfibo(5))

