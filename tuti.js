let letras =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const generarLetra =() =>{
    document.getElementById(`eleccion`).style.display = "";
    let i = getRandomInt(letras.length)
    setTimeout(function saludos(){
        document.getElementById("resultado").innerText = `${letras[i]}`
        var timeleft = 30;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("eleccion").innerHTML = "Finished";
            document.getElementById(`eleccion`).style.display = "none";
          } else {
            document.getElementById("eleccion").innerHTML = timeleft;
          }
          timeleft -= 1;
        }, 1000);}
        
        
    , 2000);
}



function ShowDiv() {
    for (let i = 0; i < 7; i++) {
        document.getElementById(`myDiv-0-${i}`).style.display = "";
        
    }
    document.getElementById(`inicio`).style.display = "none";
    
}