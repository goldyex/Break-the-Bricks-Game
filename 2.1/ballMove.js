
function ballMove(){
    ballX += ballSpeedX;
	ballY += ballSpeedY;

	if(ballX < 0 && ballSpeedX<0.0) { //leaves left side
		ballSpeedX *= -1;
	}
	if(ballX > canvas.width && ballSpeedX>0.0) { //leaves right side
		ballSpeedX *= -1;
	}
	if(ballY < 0 && ballSpeedY<0.0) { //leaves top side
		ballSpeedY *= -1;
	}
	if(ballY > canvas.height) { //leaves left side
		resetBall();
        brickReset();

	}
}