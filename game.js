let player = 1
const casilla = [[0, 0, 0], [0,0,0], [0,0,0]]

const desactivarCasillas= () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            document.getElementById(`${i}-${j}`).className += " disabled" 
        }
    }
}

const hayEmpate = () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            if (casilla[i][j] == 0) return false
        }
    }
    return true
}

const ganador = () =>{
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[0][1] && casilla[0][1]==casilla[0][2]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[1][0] != 0 && casilla[1][0]==casilla[1][1] && casilla[1][1]==casilla[1][2]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[2][0] != 0 && casilla[2][0]==casilla[2][1] && casilla[2][1]==casilla[2][2]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[1][0] && casilla[1][0]==casilla[2][0]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[0][1] != 0 && casilla[0][1]==casilla[1][1] && casilla[1][1]==casilla[2][1]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[0][2] != 0 && casilla[0][2]==casilla[1][2] && casilla[1][2]==casilla[2][2]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[0][0] != 0 && casilla[0][0]==casilla[1][1] && casilla[1][1]==casilla[2][2]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (casilla[0][2] != 0 && casilla[0][2]==casilla[1][1] && casilla[1][1]==casilla[2][0]) {
        console.log(`GANADOR ES EL JUGADOR ${player}`)
        desactivarCasillas()
    }
    if (hayEmpate()) {
        desactivarCasillas()
        document.getElementById("titulo").innerText = "Empate"
    }
}
const gameOn = (fila,col)=>{
 
    if (casilla[fila][col]==0) {
        casilla[fila][col] = player
    
        if(player == 1){
            document.getElementById(`${fila}-${col}`).innerText = "O"
            ganador()
            player = 2
            console.log("se convierte en player 1")
    }
        else{
            document.getElementById(`${fila}-${col}`).innerText = "P"            
            ganador()
            player = 1
            console.log("se convierte en player 0")
        }
    }
}


function onClickEvent() {
 
}