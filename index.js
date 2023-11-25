
// alert("Hello Welcome to all in my game")

const cells = document.querySelectorAll(".cell");
const gameStatus = document.querySelector("#gameStatus");
const restartBtn = document.querySelector("#restartBtn");

const winCondition = [
   
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]

]

let Option = ["", "", "", "", "", "", "", "", ""]
let currentPlayer ="X"
let running = false ;

initialseGame();

function initialseGame(){
    cells.forEach(cell =>{
        cell.addEventListener("click",cellClicked)
    })
    restartBtn.addEventListener("click",restartGame)

    gameStatus.textContent = `${currentPlayer}'s turn`;
     running = true

}

function cellClicked(){
   const cellIndex = this.getAttribute("cellIndex");

   if(Option[cellIndex]!= "" || !running ){
      return
   }

    updatedCell(this,cellIndex)
    // changePlayer();
    checkWinner();
}

function updatedCell(cell,index){  
   Option[index] = currentPlayer ;
   console.log(Option);
   cell.textContent = currentPlayer ; 
}

function changePlayer(){
   currentPlayer = (currentPlayer == "X")? "O" : "X" 
   gameStatus.textContent =  `${currentPlayer}'s turn`;
}


function checkWinner(){
  let randomWin = false ;
   
    for(let i=0;i<winCondition.length;i++){
        const condition = winCondition[i];
        let cellA = Option[condition[0]];
        let cellB = Option[condition[1]];
        let cellC = Option[condition[2]]; 
             
        console.log(`${cellA}  ${cellB}  ${cellC}`);

        if(cellA == "" ||  cellB == "" || cellC==""){
           continue; 
         } 

        if(cellA == cellB &&  cellB == cellC){
           randomWin = true ;  
            break;
        } 

    }

    if(randomWin){
        gameStatus.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!Option.includes("")){
        gameStatus.textContent = "Draw!";
        running = false;
    }else{
         changePlayer();
    }
    
}


function restartGame(){
  currentPlayer = "X";
  Option = ["", "", "", "", "", "", "", "", ""];
  gameStatus.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell =>{
    cell.textContent = ""
  })
  running = true
}

