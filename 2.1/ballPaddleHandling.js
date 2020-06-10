function ballPaddleHandling(){ //how ball interacts with paddle 
    //edges of paddle
    var paddleTopEdgeY= canvas.height- paddle_dist_from_edge;
    var paddleBottomEdgeY= paddleTopEdgeY+ paddle_thickness;
    var paddleLeftEdgeX= paddleX;
    var paddleRightEdgeX= paddleLeftEdgeX+ paddle_width;

    if (ballY > paddleTopEdgeY && //below the top of paddle
    ballY < paddleBottomEdgeY && //above bottom of paddle
    ballX > paddleLeftEdgeX && //right of the left side of paddle
    ballX < paddleRightEdgeX){ //left of the left side of paddle 
        ballSpeedY *= -1;
        var centerofPaddleX= paddleX+ paddle_width/2;
        var ballDistFromPaddleCenterX = ballX- centerofPaddleX;
        ballSpeedX= ballDistFromPaddleCenterX*0.35;
        if (bricksLeft==0){
            brickReset();
        } //end small if statement

    } //end if statement (long)

    

} //end ballpaddlehandling. 

