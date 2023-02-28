let player = 1
const casilla = [[0, 0, 0], [0,0,0], [0,0,0]]
let iRand = getRandomInt(3)
let jRand = getRandomInt(3)
let columnas = [0,1,2,0,1,2,0,1,2]
let filas = [0,1,2,0,1,2,0,1,2]


const desactivarCasillas= () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            document.getElementById(`${i}-${j}`).className += " disabled" 
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const hayEmpate = () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            if (casilla[i][j] == 0) return false
        }
    }
    return true
}

const imp = () =>{
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            console.log(casilla[i][j])
        }
    }
}
/*
const resultado = () =>{
    if (player = 1) {
        document.getElementById("resultado").innerText = `Ganó jugador ${player}`
        console.log("gana 1")
        imp()
    } else{
        document.getElementById("resultado").innerText = "Cómo fue que gané? xd"
    }
}
*/
const ganador = () =>{
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[0][1] && casilla[0][1]==casilla[0][2]) {
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[0][0]}`
        desactivarCasillas()
        console.log("v1")
    }
    if (casilla[1][0] != 0 && casilla[1][0]==casilla[1][1] && casilla[1][1]==casilla[1][2]) {
        //resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[1][0]}`
        desactivarCasillas()
        console.log("v2")
    }
    if (casilla[2][0] != 0 && casilla[2][0]==casilla[2][1] && casilla[2][1]==casilla[2][2]) {
        //resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[2][0]}`
        desactivarCasillas()
        console.log("v3")
    }
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[1][0] && casilla[1][0]==casilla[2][0]) {
        //resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[0][0]}`
        desactivarCasillas()
        console.log("v4")
    }
    if (casilla[0][1] != 0 && casilla[0][1]==casilla[1][1] && casilla[1][1]==casilla[2][1]) {
        //resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[0][1]}`
        desactivarCasillas()
        console.log("v5")
    }
    if (casilla[0][2] != 0 && casilla[0][2]==casilla[1][2] && casilla[1][2]==casilla[2][2]) {
        //resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[0][2]}`
        desactivarCasillas()
        console.log("v6")
    }
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[1][1] && casilla[1][1]==casilla[2][2]) {
        //resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[0][0]}`
        desactivarCasillas()
        console.log("v7")
    }
    if (casilla[0][2] != 0 && casilla[0][2]==casilla[1][1] && casilla[1][1]==casilla[2][0]) {
        resultado()
        document.getElementById("resultado").innerText = `Ganó jugador ${casilla[0][2]}`
        desactivarCasillas()
        console.log("v8")
    }
    if (hayEmpate()) {
        desactivarCasillas()
        document.getElementById("resultado").innerText = "Empatamos bb, simplemente conectados"
    }
}

//	128151	1F497
const prueba = () =>{
    iRand = getRandomInt(3)
    jRand = getRandomInt(3)
    if(casilla[iRand][jRand]==0 || casilla[iRand][jRand] != 1 && casilla[iRand][jRand] != 2){
        casilla[iRand][jRand] = player
        console.log(`es el ${player}`)
        console.log(iRand)
        console.log(jRand)
        document.getElementById(`${iRand}-${jRand}`).innerText = "♏"
        document.getElementById("denuevo").innerText = ""
        ganador()
        player = 1
        console.log("se convierte en player 1")
    }else{
        casilla[iRand][jRand] = player
        document.getElementById("denuevo").innerText = "Presiona de nuevo"
    }
    
}

const gameOn = (fila,col)=>{
 
    if (casilla[fila][col]==0) {
        casilla[fila][col] = player
    
        if(player == 1){
            document.getElementById(`${fila}-${col}`).innerText = "♓"            
            ganador()
            player = 2
            console.log("se convierte en player 2")
    }
        /*else{
                iRand = getRandomInt(3)
                jRand = getRandomInt(3)
                document.getElementById(`${filas[iRand]}-${columnas[jRand]}`).innerText = "O"
                ganador()
                player = 1
                console.log("se convierte en player 1")       
            }*/
    
    }
}


function onClickEvent() {
 
}