function brickReset(){
    bricksLeft=0;
    //create a gap on top 
    for (let k=0; k< 3* brick_col; k++){
        brickGrid[k]=false;
    }
    //randomize grid of rectangles
    for (let i=3 * brick_col; i<brick_col*brick_row; i++){
        let tempRand= Math.random();
        (tempRand>0.33) ? brickGrid[i]= "true" :  "false";
        if (brickGrid[i]){bricksLeft++;}
    }
}