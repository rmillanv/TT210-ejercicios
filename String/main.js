
let entradatextoIngresado = document.getElementById("textoIngresado");
let Botontrans = document.getElementById("Botontrans");

document.getElementById("Botontrans").addEventListener("click", function() {
    const textoIngresado = document.getElementById("textoIngresado").value;
    const transposedText = transposeText(textoIngresado);
    const resultado = `El resultado de interponer el texto "${textoIngresado}" es: ${transposedText}`;
  
   
    document.getElementById("textoTranspuesto").innerText = resultado ;
});

function transposeText(text) {
    return text.split('').reverse().join(''); 
}
