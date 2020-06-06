var ManualNextMoveGenerator = /** @class */ (function () {
    function ManualNextMoveGenerator() {
    }
    ManualNextMoveGenerator.prototype.getNextMove = function (board) {
        return this.newMethod(board);
    };
    ManualNextMoveGenerator.prototype.newMethod = function (board) {
        do {
            var move = parseFloat(prompt("Please make your move:"));
        } while (this.isInvalidMove(board, move));
        return move;
    };
    ManualNextMoveGenerator.prototype.isInvalidMove = function (board, move) {
        if (isNaN(move) || move % 1 != 0 || move < 1 || move > 9 || !this.isPlaceAvailable(board, move)) {
            alert("Please use only full numbers between 1-9!");
            return true;
        }
        return false;
    };
    ManualNextMoveGenerator.prototype.isPlaceAvailable = function (board, move) {
        return board.isMoveAvailable(move);
    };
    return ManualNextMoveGenerator;
}());
//# sourceMappingURL=ManualNextMoveGenerator.js.map