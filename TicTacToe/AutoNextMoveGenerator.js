var AutoNextMoveGenerator = /** @class */ (function () {
    function AutoNextMoveGenerator() {
        this.corners = [1, 3, 7, 9];
        this.sides = [2, 4, 6, 8];
    }
    AutoNextMoveGenerator.prototype.getNextMove = function (board) {
        var defenceFound = -1;
        if (board.steps < 3 && board.isMoveAvailable(5))
            return 5;
        /**  AI places his sign by availability->if win found->defence by rows, cols and diagonals **/
        for (var i = 0; i < board.winningSets.length; i++) {
            if (board.boardState[board.winningSets[i][0]] == board.boardState[board.winningSets[i][1]] &&
                board.isMoveAvailable(board.winningSets[i][2]) &&
                board.boardState[board.winningSets[i][0]] != Sign.NONE) {
                if (board.boardState[board.winningSets[i][0]] == Sign.O)
                    return board.winningSets[i][2];
                else
                    defenceFound = board.winningSets[i][2];
            }
            if (board.boardState[board.winningSets[i][0]] == board.boardState[board.winningSets[i][2]] &&
                board.isMoveAvailable(board.winningSets[i][1]) &&
                board.boardState[board.winningSets[i][2]] != Sign.NONE) {
                if (board.boardState[board.winningSets[i][0]] == Sign.O)
                    return board.winningSets[i][1];
                else
                    defenceFound = board.winningSets[i][1];
            }
            if (board.boardState[board.winningSets[i][1]] == board.boardState[board.winningSets[i][2]] &&
                board.isMoveAvailable(board.winningSets[i][0]) &&
                board.boardState[board.winningSets[i][1]] != Sign.NONE) {
                if (board.boardState[board.winningSets[i][1]] == Sign.O)
                    return board.winningSets[i][0];
                else
                    defenceFound = board.winningSets[i][0];
            }
        }
        if (defenceFound > -1)
            return defenceFound;
        /****************** The AI prefers corners to sides for better win rate ********************/
        for (var i = 0; i < 4; i++) {
            if (this.isPlaceAvailable(board, this.corners[i]))
                return this.corners[i];
        }
        for (var i = 0; i < 4; i++) {
            if (this.isPlaceAvailable(board, this.sides[i]))
                return this.sides[i];
        }
    };
    /********************* Checks whether a space is empty **********************/
    AutoNextMoveGenerator.prototype.isPlaceAvailable = function (board, move) {
        return board.isMoveAvailable(move);
    };
    return AutoNextMoveGenerator;
}());
//# sourceMappingURL=AutoNextMoveGenerator.js.map