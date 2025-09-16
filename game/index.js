// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardHeight = 600;
// let boardWidth = 1000;
// let square = 50;

// let snakeCells = [[0,0]];

// let direction = 'right';

// let gameOver = false;

// let foodCell = generateRandomCell();

// let score = 0;

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowLeft') {
//     direction = 'left';
//   } else if (event.key === 'ArrowDown') {
//     direction = 'down';
//   } else if (event.key === 'ArrowRight') {
//     direction = 'right';
//   } else {
//     direction = 'up';
//   }
// })

// let intervalId = setInterval(function() {
//   update();
//   draw();
// }, 100);

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];

//   let newX;
//   let newY;

//   if (direction === 'right') {
//     newX = headX + square;
//     newY = headY;

//     if (newX === boardWidth) {
//       gameOver = true;
//     }
    
//   } else if (direction === 'left') {
//     newX = headX - square;
//     newY = headY;

//     if (newX < 0) {
//       gameOver = true;
//     }

//   } else if (direction === 'up') {
//     newX = headX;
//     newY = headY - square;

//     if (newY < 0) {
//       gameOver = true;
//     }

//   } else {
//     newX = headX;
//     newY = headY + square;

//     if (newY === boardHeight) {
//       gameOver = true;
//     }
//   }

//   snakeCells.push([newX, newY]);

//   if (foodCell[0] === headX && foodCell[1] === headY) {
//     foodCell = generateRandomCell();
//     score += 1;
//   } else {
//     snakeCells.shift();
//   }
// }

// function draw() {

//   if (gameOver === true) {
//     clearInterval(intervalId);
//     ctx.fillStyle = 'red';
//     ctx.font = '40px sans-serif';
//     ctx.fillText('Game over', 50, 150);
//     return;
//   }

//   ctx.clearRect(0, 0, boardWidth, boardHeight);
//   for (let cell of snakeCells) {
//     ctx.fillStyle = 'yellow';
//     ctx.fillRect(cell[0], cell[1], square, square);
//     ctx.fillStyle = 'red';
//     ctx.strokeRect(cell[0], cell[1], square, square);
//   }

//   ctx.fillStyle = 'red';
//   ctx.fillRect(foodCell[0], foodCell[1], square, square);
//   ctx.fillStyle = 'yellow';

//   // draw score
//   ctx.fillStyle = 'white';
//   ctx.font = '20px sans-serif';
//   ctx.fillText(`Score: ${score}`, 50, 50);
// }




  let canvas=   document.querySelector('canvas')
    let pen=    canvas.getContext("2d")
 
    let snakeCells=[[0,0]]
    let cell=50
    let direction="right"
    let gameOver=false
   let score=0
let random=generateRandomCell()


    let id=   setInterval(()=>{
      draw()
      update()

    },100)
       document.addEventListener("keydown",(e)=>{
        // console.log("helllo");
        // console.log(e);
        if(e.key=="ArrowUp"){
          direction='up'
        }else if(e.key=='ArrowDown'){
          direction='down'
        }else if(e.key=='ArrowLeft'){
          direction='left'
        }else{
          direction='right'
        }

       })
    function draw(){
      if(gameOver==true){
        clearInterval(id)
     
       pen.font = '40px sans-serif';
           pen.fillText('Game over', 50, 150);
        return 
      }
      pen.clearRect(0,0,1100,500)
        for(let i of snakeCells){
        
              pen.fillStyle="yellow"
            pen.fillRect(i[0],i[1],cell,cell)
        }

        pen.font = '40px sans-serif';
        pen.fillText(`${score}`,150,50);
               pen.fillStyle="white"
        pen.fillRect(random[0],random[1],cell,cell)
    }

    function update(){
     let headX=   snakeCells[snakeCells.length-1][0]
        let headY=  snakeCells[snakeCells.length-1][1]
         
         let newX
            let newY
            if(direction=='right'){
              newX=headX+cell
              newY=headY
              if(newX==1100){
                gameOver=true
              }
            }
            else if( direction=="left"){
              newX=headX-cell
              newY=headY
              if(newX<0){
                gameOver=true
              }
            }
            else if(direction=='up'){
              newX=headX
              newY=headY-cell
              if(newY<0){
                gameOver=true
              }

            }else{
              newX=headX
              newY=headY+cell
              if(newY==500){
                gameOver=true
              }
            }
     
            snakeCells.push([newX,newY])
       
            if(newX==random[0] && newY== random[1]){
              random=generateRandomCell()
              score+=1
            }
            else{
              snakeCells.shift()

            }
        
         
           


    }

    function generateRandomCell() {
  return [
    Math.round((Math.random()*(1050))/cell)*cell,
    Math.round((Math.random()*(450))/cell)*cell
  ]
}

console.log(generateRandomCell());









        //  console.log( Math.floor(Math.random()*500)   );
         




