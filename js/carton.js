
function EnteroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generarArrayRandom(min, max) {
      array = []
      for (let i = 1; i <= 5; i++) {
          var comprobarNumero = true;
          var numeroRandom = EnteroRandom(min, max);
          if (array.indexOf(numeroRandom) != -1) {
              while (comprobarNumero) {
                  var numeroRandom = EnteroRandom(min, max);
                  if (!array.indexOf(numeroRandom) != -1) {
                      array.push(numeroRandom)
                      comprobarNumero = false
                  }
              }
          } 
          else {
              array.push(numeroRandom);
          }
      }
      return array
  }
  function arrayFormatter(array){
    arrayFormateado = [[],[],[],[],[]]
    for(let i = 0; i <= 4; i++){
      for(let j = 0; j <= 4; j++){
        arrayFormateado[i][j] = array[j][i]
      }
    }
    return arrayFormateado

  }
  function generarCartones() {
    var numerosMenor15 = generarArrayRandom(1,15)
    var numerosMenor30 = generarArrayRandom(16,30)
    var numerosMenor45 = generarArrayRandom(31,45)
    var numerosMenor60 = generarArrayRandom(46,60)
    var numerosMenor75 = generarArrayRandom(61,75)
    var nuevoArray = [numerosMenor15, numerosMenor30, numerosMenor45, numerosMenor60, numerosMenor75]
    arrayFormateado = arrayFormatter(nuevoArray)
    return arrayFormateado
  }
  cartonBingo = generarCartones()
  crearTabla(cartonBingo)

  function crearTabla(carton){
    let tabla = document.createElement("table")
    tabla.style.border = "1px solid black"
    tabla.style.marginLeft = "auto"
    tabla.style.marginRight = "auto"
    for(let i = 0; i <= 4; i++){
      let fila = document.createElement("tr")
      for(let j = 0; j <= 4; j++){
        let columna = document.createElement("td")
        columna.textContent = carton[i][j]
        columna.style.border = "1px solid black"
        columna.width = "100px"
        columna.height = "100px"
        columna.style.fontSize = "30px"
        columna.style.textAlign = "center"
        columna.addEventListener("click", function(){
          if(columna.style.backgroundColor == "red"){
            columna.style.backgroundColor = "white"
          }
          else{
             columna.style.backgroundColor = "red"
          }
        });
        fila.appendChild(columna)
      }
      tabla.appendChild(fila)


    }
    document.getElementById("tablaAqui").appendChild(tabla)

  }

