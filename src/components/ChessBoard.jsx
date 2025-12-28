import React from 'react'
import Peices from './Peices.jsx'
import { useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {updateSelectedPeicePosition} from '../features/chess/selectedPeiceSlice.jsx';
import {updateMyPawnMap} from '../features/chess/chessSlice.jsx';
// import {updatePeiceMap} from '../features/chess/peiceMap.jsx';
import {updateBoard} from '../features/chess/boardSlice.jsx';
export default function ChessBoard() {
   const selectedpeiceglobal = useSelector((state)=>state.SelectedPeice);
   const selectedpeiceglobaRef = useRef(selectedpeiceglobal);
   const myPawnMap = useSelector((state)=>state.Peices.myPawnMap);
   const myPawnMapRef = useRef(myPawnMap);
   const Board = useSelector((state)=>state.Board.board);
   const BoardRef = useRef(Board);
  //  const Board = useSelector((state)=>state.Board.board);
  const dispatch = useDispatch();

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
    selectedpeiceglobaRef.current = selectedpeiceglobal;
    myPawnMapRef.current = myPawnMap;
    BoardRef.current = Board;
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

  for(let i =0;i<document.getElementsByClassName("block").length;i++){
    document.getElementsByClassName("block")[i].removeEventListener("click",calculatePawnMovements);
    document.getElementsByClassName("block")[i].addEventListener("click",calculatePawnMovements);
}
   
  },[selectedpeiceglobal])
   
function calculatePawnMovements(e)
{
  e.stopPropagation();
  e.preventDefault();
      if (selectedpeiceglobaRef.current.currentPeicePosition == null) {
        return;
      }
      console.log(myPawnMapRef.current)
      let peiceRow = selectedpeiceglobaRef.current.currentPeicePosition?.split(",")[0];
      let peiceCol = selectedpeiceglobaRef.current.currentPeicePosition?.split(",")[1];
      let peiceId = selectedpeiceglobaRef.current.peiceId;
      let clickedRow = e.target.dataset.row//position.split(",")[0];
      let clickedCol = e.target.dataset.col//position.split(",")[1];
   // console.log("peiceRow",peiceRow,"peiceCol",peiceCol,"clickedRow",clickedRow,"clickedCol",clickedCol)

   if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me"){
    var  rowDiff = parseInt(peiceRow) - parseInt(clickedRow);
    var colDiff = parseInt(peiceCol) - parseInt(clickedCol);
   }else{
    var  rowDiff = parseInt(clickedRow) - parseInt(peiceRow);
    var colDiff = parseInt(clickedCol) - parseInt(peiceCol);
   }
   
    console.log("rowDiff",rowDiff,"colDiff",colDiff)
      if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-pawn-playing-as") == "pawn"){
        
         if(peiceRow == 6 || peiceRow == 1){
    if(colDiff == 0 && rowDiff < 3 && rowDiff >0){
    //move forward
    //document.getElementById(peiceId).style.transform = `translate(${peiceCol*100}%, ${(peiceRow*100)-(rowDiff*100)}%);`;
    if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me"){
      document.getElementById(peiceId).style.setProperty(`transform`, `translate(${peiceCol*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
    }else{
      document.getElementById(peiceId).style.setProperty(`transform`, `translate(${peiceCol*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
    }

   dispatch(updateSelectedPeicePosition({position:clickedRow+","+clickedCol,id:peiceId}));
    dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
    // dispatch(updatePeiceMap({row:clickedRow,col:clickedCol,id:peiceId}))

    moveMyPawn(peiceId,rowDiff,colDiff);
  }else if(colDiff == 0 && rowDiff < 2 && rowDiff >0){
    if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me"){
      document.getElementById(peiceId).style.setProperty(`transform`, `translate(${peiceCol*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
      
    }else{
document.getElementById(peiceId).style.setProperty(`transform`, `translate(${peiceCol*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
    }
   dispatch(updateSelectedPeicePosition({position:clickedRow+","+clickedCol,id:peiceId}));
    dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
     moveMyPawn(peiceId,rowDiff,colDiff);
  }else{
    console.log("invalid move");
  }
  }else{
    if(colDiff == 0 && rowDiff >0 && rowDiff <2){
      //move forward by One Step
      if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me"){
        document.getElementById(peiceId).style.setProperty(`transform`, `translate(${peiceCol*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);

      }else{
        document.getElementById(peiceId).style.setProperty(`transform`, `translate(${peiceCol*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
      }
    dispatch(updateSelectedPeicePosition({position:clickedRow+","+clickedCol,id:peiceId}));
    dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
     moveMyPawn(peiceId,rowDiff,colDiff);
    }
  }
      }else if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-pawn-playing-as") == "rook"){
        if(clickedCol == peiceCol || peiceRow == clickedRow){
           if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me"){
          document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
        }else{
          document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
        }
         dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
        }
       
    }else if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-pawn-playing-as") == "knight"){
      
      if((((clickedCol == parseInt(peiceCol)+1) && (clickedRow == parseInt(peiceRow)-2)) ||
       ((clickedCol == parseInt(peiceCol)-1) && (clickedRow == parseInt(peiceRow)-2)) ||
       ((clickedCol == parseInt(peiceCol)-2) && (clickedRow == parseInt(peiceRow)-1)) || 
        ((clickedCol == parseInt(peiceCol)+2) && (clickedRow == parseInt(peiceRow)-1)) ||
        ((clickedCol == parseInt(peiceCol)+2) && (clickedRow == parseInt(peiceRow)+1)) ||
        ((clickedCol == parseInt(peiceCol)-2) && (clickedRow == parseInt(peiceRow)+1)) ||
        ((clickedCol == parseInt(peiceCol)-1) && (clickedRow == parseInt(peiceRow)+2)) ||
        ((clickedCol == parseInt(peiceCol)+1) && (clickedRow == parseInt(peiceRow)+2))) &&
        document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me"
      ){
       
        document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
        dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));

      }else if((clickedCol == parseInt(peiceCol)-1) && (clickedRow == parseInt(peiceRow)+2) ||
      (clickedCol == parseInt(peiceCol)+1) && (clickedRow == parseInt(peiceRow)+2) ||
      (clickedCol == parseInt(peiceCol)-2) && (clickedRow == parseInt(peiceRow)+1) || 
       (clickedCol == parseInt(peiceCol)+2) && (clickedRow == parseInt(peiceRow)+1) ||
       (clickedCol == parseInt(peiceCol)-2) && (clickedRow == parseInt(peiceRow)-1) ||
        (clickedCol == parseInt(peiceCol)+2) && (clickedRow == parseInt(peiceRow)-1) ||
        (clickedCol == parseInt(peiceCol)-1) && (clickedRow == parseInt(peiceRow)-2) ||
        (clickedCol == parseInt(peiceCol)+1) && (clickedRow == parseInt(peiceRow)-2
    )){
         document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
        dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));

        }
     
    }
    else if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-pawn-playing-as") == "bishop"){
      if((document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me") && (Math.abs(parseInt(clickedRow)-parseInt(peiceRow)) == Math.abs(parseInt(clickedCol)-parseInt(peiceCol)))){
        document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
        dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
      }else if((document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "opponent") && (Math.abs(parseInt(clickedRow)-parseInt(peiceRow)) == Math.abs(parseInt(clickedCol)-parseInt(peiceCol)))){
        document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
         dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
      }
    }
      else if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-pawn-playing-as") == "queen"){
        if((document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me") && ((clickedCol == peiceCol || peiceRow == clickedRow) || (Math.abs(parseInt(clickedRow)-parseInt(peiceRow)) == Math.abs(parseInt(clickedCol)-parseInt(peiceCol))) )){ //Math.abs(parseInt(clickedRow)-parseInt(peiceRow)) == Math.abs(parseInt(clickedCol)-parseInt(peiceCol))
          document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
          dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
        }else if((document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "opponent") && ((clickedCol == peiceCol || peiceRow == clickedRow) || (Math.abs(parseInt(clickedRow)-parseInt(peiceRow)) == Math.abs(parseInt(clickedCol)-parseInt(peiceCol)))) ){ //Math.abs(parseInt(clickedRow)-parseInt(peiceRow)) == Math.abs(parseInt(clickedCol)-parseInt(peiceCol))
          document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
           dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
        }
      }else if(document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-pawn-playing-as") == "king"){
        if((document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "me") && (clickedCol >= parseInt(peiceCol)-1 && clickedCol <= parseInt(peiceCol)+1 && clickedRow >= parseInt(peiceRow)-1 && clickedRow <= parseInt(peiceRow)+1)){
          document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)-(rowDiff*100)}%)`);
          dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
        }else if((document.querySelectorAll(`#${peiceId}`)[0].getAttribute("data-player") == "opponent") && (clickedCol >= parseInt(peiceCol)-1 && clickedCol <= parseInt(peiceCol)+1 && clickedRow >= parseInt(peiceRow)-1 && clickedRow <= parseInt(peiceRow)+1)){
          document.getElementById(peiceId).style.setProperty(`transform`, `translate(${Math.abs(clickedCol)*100}%, ${(peiceRow*100)+(rowDiff*100)}%)`);
          dispatch(updateMyPawnMap({row:clickedRow,col:clickedCol,id:peiceId}));
        }
      }
      
    dispatch(updateSelectedPeicePosition({position:null,id:peiceId}));
    setTimeout(()=>{
      document.getElementById(peiceId).querySelector("svg").classList.remove("selectedPeice");
    },200)

}

// Move Peice inside matrix Functionality
function moveMyPawn(pawn,moveBy,digonalMovement){

    const myPawn = 1;
    const theirPawn = -1;
    const emptyBlock = 0;
    const theirmaterial = [-10,-7,-5,-12,-20,-5,-7,-10,-2];
    const myMaterial = [10,7,5,12,20,5,7,10,1];
    
    let currentCol=parseInt(myPawnMapRef.current[pawn].split(",")[1]);
    let currentRow= parseInt(myPawnMapRef.current[pawn].split(",")[0]);   
    let currentActRow  = currentCol == 0 ? 1 : currentCol;
    // debugger;
    if (moveBy == 2 && currentRow != 6) {
        return BoardRef.current; 
    } 

     if (digonalMovement < 0) {
       if (BoardRef.current[currentRow-moveBy][currentCol-1] != emptyBlock && theirmaterial.indexOf(BoardRef.current[currentRow-moveBy][currentCol-1]) != -1) {
           
           BoardRef.current[currentRow-moveBy][currentCol-1] =  BoardRef.current[currentRow][currentCol] 
            BoardRef.current[currentRow][currentCol] = 0;
           // updating Access Map
            myPawnMapRef.current[pawn] =currentRow-moveBy+"," +currentCol-1;


            if (currentRow-moveBy == 0) {
        console.log("congrats!, you can upgrade your pawn now")
    }
       }
        return chessBoard
    }else
    if(digonalMovement > 0){
          if (BoardRef.current[currentRow-moveBy][currentCol+1] != emptyBlock) {
           BoardRef.current[currentRow-moveBy][currentCol+1] =  BoardRef.current[currentRow][currentCol]
           BoardRef.current[currentRow][currentCol] = 0;
               // updating Access Map
            myPawnMapRef.current[pawn] =currentRow-moveBy+"," +currentCol+1;
               if (currentRow-moveBy == 0) {
        console.log("congrats!, you can upgrade your pawn now")
    }
       }
        return BoardRef.current
    }

    if (BoardRef.current[currentRow-1][currentCol] != 0 || BoardRef.current[currentRow-moveBy][currentCol] != 0) {
        return "Cannot move!, there is a material Ahead"; 
        return BoardRef.current
    } 

    dispatch(updateBoard({tocolumn:currentCol,torow :currentRow-moveBy,fromcol:currentCol,fromrow:currentRow,value :BoardRef.current[currentRow][currentCol]}));
    /*BoardRef.current[currentRow-moveBy][currentCol] = BoardRef.current[currentRow][currentCol];
    BoardRef.current[currentRow][currentCol] = 0;*/
    if (currentRow-moveBy == 0) {
        console.log("congrats!, you can upgrade your pawn now")
    }
    // myPawnMapRef.current[pawn] =currentRow-moveBy+"," +currentCol;
    return BoardRef.current
}


  return (
    <div className='board'>
        <Peices></Peices>
    <div className='boardContainer'>
      
      {blocks}
    </div>
    </div>
  )
}
