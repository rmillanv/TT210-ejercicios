// let listaMercado = ["pasta","papa criolla","helado","carne","pollo"]

// console.log(listaMercado)
// console.log(listaMercado,length)

// listaMercado.push("costillas de cerdo")
// console.log(listaMercado)
// //listaMercado.forEach((item,index)=>{
// //   console.log(item + " " +index)
// //})

// let fibo =[0,1,2,3,4,5,6,7,8,9,0]

// fiboNuevo = fibo.map(numero =>{
//     return numero * 2
// } )
// console.log(fibo)
// console.log(fiboNuevo)


let InsumosDeHuevo = ["Huevos","mantequilla","Sal","Agua","Aceite"]
let Utencilios = ["Sarten","Olla","Espatula","Fogon"]
console.log(InsumosDeHuevo)
console.log(Utencilios)
console.log("¿Como Quiere el huevo?")
TipoHuevo = "Cocinado"
if(TipoHuevo=="Frito"){
    console.log("Calentar la sartén a fuego medio")
    console.log("Agregar Aceite o Mantequilla")
    console.log("¿Utiliza mantequilla o aceite?")
    AceiteMantequilla = "Aceite"
    if(AceiteMantequilla =="mantequilla"){
        console.log("Dejar derretir la mantequilla")
    }
     else{
        console.log("probar si esta caliente el aceite")
    }
    console.log("Romper cascara de huevo")
    console.log("Freír el huevo")
    console.log("Añadir sal y/o Pimienta al gusto")
    console.log("Retirar el huevo")
    console.log("Servir el huevo")
}else if(TipoHuevo=="Cocinado"){
    console.log("Alistar los materiales para huevo Cocinado")
    console.log("Calentar el agua en olla")
    let temperatura = 10
    while(temperatura < 100){
        console.log("Calentar el agua")
        temperatura = temperatura + 10
        console.log(temperatura)
    }
        console.log("Añadir el huevo a la olla")
        console.log("Dejar el Huevo 5 minutos en agua hirviendo")
        console.log("Retirar el huevo")
        console.log("Pelar huevo")
        console.log("Servir el huevo")
    
}else{
    console.log("No quiere Huevo")
}



