let player = 1
const casilla = [[0, 0, 0], [0,0,0], [0,0,0]]
const gameOn = (fila,col)=>{
 
    if (casilla[fila][col]==0) {
        casilla[fila][col] = player
    
        if(player == 1){
            document.getElementById(`${fila}-${col}`).innerText = "O"
            player = 2
            console.log("se convierte en player 1")
    }
        else{
            document.getElementById(`${fila}-${col}`).innerText = "P"            
            player = 1
            console.log("se convierte en player 0")
        }
    }
}


function onClickEvent() {
 
}