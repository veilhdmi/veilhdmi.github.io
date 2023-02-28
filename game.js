let player = 1
const casilla = [[0, 0, 0], [0,0,0], [0,0,0]]
let iRand = getRandomInt(3)
let jRand = getRandomInt(3)

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

const resultado = () =>{
    if (player = 1) {
        document.getElementById("resultado").innerText = "Bueno ganaste como siempre uwu"
    } else{
        document.getElementById("resultado").innerText = "Cómo fue que gané? xd"
    }
}

const ganador = () =>{
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[0][1] && casilla[0][1]==casilla[0][2]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[1][0] != 0 && casilla[1][0]==casilla[1][1] && casilla[1][1]==casilla[1][2]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[2][0] != 0 && casilla[2][0]==casilla[2][1] && casilla[2][1]==casilla[2][2]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[1][0] && casilla[1][0]==casilla[2][0]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[0][1] != 0 && casilla[0][1]==casilla[1][1] && casilla[1][1]==casilla[2][1]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[0][2] != 0 && casilla[0][2]==casilla[1][2] && casilla[1][2]==casilla[2][2]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[1][1] && casilla[1][1]==casilla[2][2]) {
        resultado()
        desactivarCasillas()
    }
    if (casilla[0][2] != 0 && casilla[0][2]==casilla[1][1] && casilla[1][1]==casilla[2][0]) {
        resultado()
        desactivarCasillas()
    }
    if (hayEmpate()) {
        desactivarCasillas()
        document.getElementById("resultado").innerText = "Empatamos bb, simplemente conectados"
    }
}

const fabri = (fila, col) =>{
    
    while (casilla[fila][col]==0 || casilla[fila][col] != 1) {
        iRand = getRandomInt(3)
        jRand = getRandomInt(3)
        document.getElementById(`${iRand}-${jRand}`).innerText = "O"
        
        console.log("se convierte en player 1")
        break        
    }
    ganador()
    player = 1
    
}

const gameOn = (fila,col)=>{
 
    if (casilla[fila][col]==0) {
        casilla[fila][col] = player
    
        if(player == 1){
            document.getElementById(`${fila}-${col}`).innerText = "P"            
            ganador()
            player = 2
            console.log("se convierte en player 2")
    }
        else{
            
                document.getElementById(`${fila}-${col}`).innerText = "O"
                ganador()
                player = 1
                console.log("se convierte en player 1")       
            }
    
    }
}


function onClickEvent() {
 
}