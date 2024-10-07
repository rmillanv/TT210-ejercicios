const BtnChiste = document.getElementById("BtnChiste")
const  chistes = document.getElementById("Chistes")
BtnChiste.addEventListener("click",generarChiste)

async function generarChiste (){
    const res = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json"

        }
    })
    const data = await res.json()
    chistes.innerHTML = data.joke
    console.log(data)
}