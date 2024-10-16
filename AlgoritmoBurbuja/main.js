
function bubbleSort(array) {
    let n = array.length;
    let intercambio;

    do {
        intercambio = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Intercambiar los elementos
                array[i] = array[i + 1] = [array[i + 1],array[i]];

                intercambio = true; // Se realizó un intercambio
            }
        }
        n--; // Cada pasada, el último elemento ya está en su lugar
    } while (intercambio);

    return array;
}

const array = [2, 5, 4, 3];
const ArrayOrd = bubbleSort(array);
console.log(ArrayOrd);
let hijo = document.createElement("h3");
hijo.innerHTML = `este es ${ArrayOrd.join(", ")}`;
/*salida.appendChild(hijo);*/