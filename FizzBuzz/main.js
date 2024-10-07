//seleccionar el botón con el id fizzbuzzBtn
document.getElementById('fizzbuzzBtn').addEventListener('click', function() {
    const resultList = document.getElementById('result'); //Seleccionamos el elemento <ul> donde se mostrarán los resultados con el id result.
  
//Creamos un bucle for que va desde 1 hasta 100.
//let output = ''; inicializa una variable output como una cadena vacía. 
//Esta variable se usará para almacenar "Fizz", "Buzz", "FizzBuzz" o el número mismo.
    for (let i = 1; i <= 100; i++) {
        let output = '';

        if (i % 3 == 0) {
            output += 'Fizz';
        }
        if (i % 5 == 0) {
            output += 'Buzz';
        }
        if (output == '') {
            output = i;
        }

        const listItem = document.createElement('li');
        listItem.textContent = output;
        resultList.appendChild(listItem);
    }
});
