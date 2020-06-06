var SerialDrawer = /** @class */ (function () {
    function SerialDrawer() {
    }
    SerialDrawer.prototype.drawBoard = function (board) {
        return this.getBoardString(board);
    };
    SerialDrawer.prototype.getBoardString = function (board) {
        var boardArray = board.boardState;
        var boardString = "" + "<table border='1'>";
        for (var i = 1; i < boardArray.length; i++) {
            boardString += "" + "<td>" + "<font color=";
            if (board.boardState[i] == Sign.NONE)
                boardString += "" + "white>";
            else
                board.boardState[i] == Sign.X ? boardString += "" + "red>" : boardString += "" + "blue>";
            boardString += "" + this.getRepresentation(boardArray[i], i);
            if (i % 3 == 0 && i != 9)
                boardString += "" + "<tr>";
        }
        return boardString;
    };
    SerialDrawer.prototype.getRepresentation = function (cellSign, cellIndex) {
        if (cellSign != Sign.NONE) {
            return cellSign.toString();
        }
        return cellIndex.toString();
    };
    return SerialDrawer;
}());
//# sourceMappingURL=SerialDrawer.js.map