class SerialDrawer{

    drawBoard(board: Board): string {
        return this.getBoardString(board);
    }

    private getBoardString(board: Board) : string {
        let boardArray = board.boardState;
        let boardString = `${"<table border='1'>"}`;
        for (var i = 1; i < boardArray.length; i++) {
            boardString += `${"<td>"}${"<font color="}`;
            if (board.boardState[i] == Sign.NONE)
                boardString += `${"white>"}`;
            else
                board.boardState[i] == Sign.X ? boardString += `${"red>"}` : boardString += `${"blue>"}`;
            boardString += `${this.getRepresentation(boardArray[i], i)}`;
            if (i % 3 == 0 && i != 9)
                boardString += `${"<tr>"}`;
        } 
        return boardString;
    }

    private getRepresentation(cellSign: Sign, cellIndex: number): string {
        if (cellSign != Sign.NONE) {
            return cellSign.toString();
        }
        return cellIndex.toString();
    }

}