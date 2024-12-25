var listaBingo = generarNumeros()
crearTabla()
function crearTabla(){
    console.log("hola??")
      let tabla = document.createElement("table")
      tabla.style.border = "1px solid black"
      tabla.style.marginLeft = "auto"
      tabla.style.marginRight = "auto"
      tabla.id ="fichas"
      var contador = 1
        loopfila: for(let i = 1; i <= 10; i++){
            let fila = document.createElement("tr")
            if(contador == 79){
                break loopfila;
            }
            loopcolumna: for(let j = 1; j <= 10;j++){
                let columna = document.createElement("td")
                columna.id = contador
                columna.textContent = contador
                columna.style.border = "1px solid black"
                columna.width = "50px"
                columna.height = "50px"
                columna.style.fontSize = "30px"
                columna.style.textAlign = "center"
                fila.appendChild(columna)
                contador++
            }
            tabla.appendChild(fila)
        }
        document.getElementById("tablaAqui").appendChild(tabla)
}
function MarcarRuleta(eleccion){
    document.getElementById(eleccion).style.backgroundColor = "red"
}
function generarNumeros(){
    var listaBingo = []
    for(let i = 1; i <= 79; i++){
        listaBingo.push(i)
    }
    return listaBingo
}
function tirarRuleta(){
    var texto = document.getElementById("texto")
    var bola = document.getElementById("bola")

    eleccion = listaBingo[Math.floor(Math.random() * listaBingo.length)]
    texto.textContent = eleccion
    MarcarRuleta(eleccion)
    console.log(eleccion)
    listaBingo.splice(listaBingo.indexOf(eleccion),1)
    console.log(listaBingo)

}