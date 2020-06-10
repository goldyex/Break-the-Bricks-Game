function ballBrickHandling(){ //how ball interacts with a rectangle 
    var ballBrickCol= Math.floor(ballX/brick_width);
    var ballBrickRow= Math.floor(ballY/brick_height);
    var brickIndexUnderBall= rowColToArrayIndex(ballBrickCol, ballBrickRow);
    

    if (ballBrickCol>=0 && ballBrickCol< brick_col && ballBrickRow>=0 && ballBrickRow< brick_row ){

        if(isBrickAtColRow(ballBrickCol, ballBrickRow)){

            brickGrid[brickIndexUnderBall] =false;
            bricksLeft--;
            //console.log(bricksLeft);

            let prevBallX= ballX-ballSpeedX;
            let prevBallY= ballY- ballSpeedY;
            let prevBrickCol= Math.floor(prevBallX/brick_width);
            let prevBrickRow= Math.floor(prevBallY/brick_height);

            var bothTestsFailed= true; 

            if (prevBrickCol != ballBrickCol){

                if(isBrickAtColRow(prevBrickCol, ballBrickRow) !== true){
                    ballSpeedX *= -1;
                    bothTestsFailed=false;
                }
                
            }

            if (prevBrickRow != ballBrickRow){
            
                if(isBrickAtColRow(ballBrickCol, prevBrickRow) !== true){
                    ballSpeedY *= -1;
                    bothTestsFailed=false;
                }
                
            }
            
            if (bothTestsFailed){ //"armpit" case
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }
            

        } //END OF "if" statement (if brick exists)
        
    } //end of "if" statement (if ball touched brick)
}