function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen

	colorCircle(ballX,ballY, 10, 'white'); // draw ball

    colorRect(paddleX, canvas.height-paddle_dist_from_edge, paddle_width, paddle_thickness)

    drawBricks();

    let mouseBrickCol= mouseX/brick_width;
    let mouseBrickRow= mouseY/brick_height;
    //colorText(mouseBrickCol+","+mouseBrickRow, mouseX, mouseY, "yellow");
}