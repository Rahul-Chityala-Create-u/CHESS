import React from 'react'
import Peices from './Peices.jsx'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
export default function ChessBoard() {
   const selectedpeiceglobal = useSelector((state)=>state.SelectedPeice.currentPeicePosition);
  let blocks =[]
  let dataIdX = 0;
  let dataIdY = 0; 
  let charIterator =1;
  let alphaCode = 'A'.charCodeAt(0)-1;
  let numericCode = 8;
  for (let i = 1; i <= 64; i++) {
     
        blocks.push(<div className='block' key={i} data-col={dataIdX} data-row={dataIdY} data-position={String.fromCharCode(alphaCode+charIterator)+","+numericCode}>{ String.fromCharCode(alphaCode+charIterator)}{numericCode}</div>);
      if(dataIdX != 0 && dataIdX %7 == 0){
        dataIdX = 0;
        dataIdY++;
        charIterator=1;
        numericCode--;
       continue;
      }

        dataIdX++;
charIterator++;

  }
  useEffect(()=>{
    console.log(selectedpeiceglobal)
    
let MyPawn = {
     "black8" : '6,0',
     "black9" : '6,1',
     "black10" : '6,2',
     "black11" : '6,3',
     "black12" : '6,4',
     "black13" : '6,5',
     "black14" : '6,6',
     "black15" : '6,7'   
}

let chessBoard = [
    [10,7,5,12,20,5,7,10],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [10,7,5,12,20,5,7,10]
]
function moveMyPawn(pawn,moveBy,digonalMoveLeft,digonalMoveRight){

    const myPawn = 1;
    const theirPawn = -1;
    const emptyBlock = 0;
    const theirmaterial = [-10,-7,-5,-12,-20,-5,-7,-10,-2];
    const myMaterial = [10,7,5,12,20,5,7,10,1];
    
    let currentCol=parseInt(MyPawn[pawn].split(",")[1]);
    let currentRow= parseInt(MyPawn[pawn].split(",")[0]);   
    let currentActRow  = currentCol == 0 ? 1 : currentCol;
    debugger;
    if (moveBy == 2 && currentRow != 6) {
        return chessBoard; 
    } 

     if (digonalMoveLeft) {
       if (chessBoard[currentRow-moveBy][currentCol-1] != emptyBlock && theirmaterial.indexOf(chessBoard[currentRow-moveBy][currentCol-1]) != -1) {
           
           chessBoard[currentRow-moveBy][currentCol-1] =  chessBoard[currentRow][currentCol] 
            chessBoard[currentRow][currentCol] = 0;
           // updating Access Map
            MyPawn[pawn] =currentRow-moveBy+"," +currentCol-1;


            if (currentRow-moveBy == 0) {
        console.log("congrats!, you can upgrade your pawn now")
    }
       }
        return chessBoard
    }else
    if(digonalMoveRight){
          if (chessBoard[currentRow-moveBy][currentCol+1] != emptyBlock) {
           chessBoard[currentRow-moveBy][currentCol+1] =  chessBoard[currentRow][currentCol]
           chessBoard[currentRow][currentCol] = 0;
               // updating Access Map
            MyPawn[pawn] =currentRow-moveBy+"," +currentCol+1;
               if (currentRow-moveBy == 0) {
        console.log("congrats!, you can upgrade your pawn now")
    }
       }
        return chessBoard
    }
    
    if (chessBoard[currentRow-1][currentCol] != 0 || chessBoard[currentRow-moveBy][currentCol] != 0) {
        return "Cannot move!, there is a material Ahead"; 
        return chessBoard
    } 
   
    
    chessBoard[currentRow-moveBy][currentCol] = chessBoard[currentRow][currentCol];
    chessBoard[currentRow][currentCol] = 0;
    if (currentRow-moveBy == 0) {
        console.log("congrats!, you can upgrade your pawn now")
    }
    MyPawn[pawn] =currentRow-moveBy+"," +currentCol;
    return chessBoard
}


  for(let i =0;i<document.getElementsByClassName("block").length;i++){
    document.getElementsByClassName("block")[i].addEventListener("click",(e)=>{
      e.stopPropagation();
      e.preventDefault();
    //  console.log(e.target.dataset.position)
          let peiceRow = selectedpeiceglobal?.split(",")[0];
      let peiceCol = selectedpeiceglobal?.split(",")[1];
    let clickedRow = e.target.dataset.position.split(",")[0];
    let clickedCol = e.target.dataset.position.split(",")[1];
    console.log("peiceRow",peiceRow,"peiceCol",peiceCol,"clickedRow",clickedRow,"clickedCol",clickedCol)
 })
}
   
  },[selectedpeiceglobal])
   
  return (
    <div className='board'>
        <Peices></Peices>
    <div className='boardContainer'>
      
      {blocks}
    </div>
    </div>
  )
}
