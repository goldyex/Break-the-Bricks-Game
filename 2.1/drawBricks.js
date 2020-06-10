function drawBricks(){
    for (let z=0; z<brick_row; z++){ //rows
        for (let i=0 ; i< brick_col; i++){ //columns

            let arrayIndex= rowColToArrayIndex(i,z);

            if (brickGrid[arrayIndex]){
                colorRect(brick_width*i ,brick_height*z,brick_width-brickGap,brick_height-brickGap, "blue");
            }
    }
    }
    
    
}