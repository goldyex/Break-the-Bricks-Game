function isBrickAtColRow(col,row){
    if(col>=0 && col<brick_col && row>=0 && brick_row){
        var brickIndexUnderCoord= rowColToArrayIndex(col, row);
        return brickGrid[brickIndexUnderCoord];
    } else{
        return false;
    }
    
}