
//traer los elementos del DOM
let entradaElemento1 = document.getElementById("filas");
let entradaElemento2 = document.getElementById("columnas");
let crearMatriz = document.getElementById("crearMatriz");
let sumarUno = document.getElementById("sumarUno");
let salida = document.getElementById("resultado");

// inicializando variables, van a esta altura para que las puedan usar en todo el codigo 
let matriz = [];

/*acceder a un elemento del DOM  mediante su atributo id. Esta función busca en el documento HTML el elemento que tenga un identificador único (id)*/
document.getElementById('crearMatriz').addEventListener('click', function() {   
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    matriz = Array.from({ length: filas }, () => Array(columnas).fill(0));
    renderizarMatriz();
});

document.getElementById('sumarUno').addEventListener('click', function() {
    if (matriz.length > 0) {
        matriz = matriz.map(fila => fila.map(valor => valor + 1));
        renderizarMatriz();
    }
});

function renderizarMatriz() {
    const matrizContainer = document.getElementById('matrizContainer');
    matrizContainer.innerHTML = '';

    if (matriz.length > 0) {
        const table = document.createElement('table');

        matriz.forEach((fila, i) => {
            const tr = document.createElement('tr');
            fila.forEach((valor, j) => {
                const td = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'number';
                input.value = valor;
                input.addEventListener('input', function() {
                    matriz[i][j] = parseInt(input.value) || 0; // Actualiza el valor en la matriz
                });
                td.appendChild(input);
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

       matrizContainer.appendChild(table);
       //salida.appendChild(table);
    }
}




/*const array = [1, 2, 3, 4, 5];
const nuevoArray = array.map(elemento => elemento + 1);
console.log(nuevoArray); */

