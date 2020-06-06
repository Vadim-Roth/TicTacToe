class ManualNextMoveGenerator implements INextMoveGenerator {

    getNextMove(board: Board): number {

        return this.newMethod(board);
    }

    private newMethod(board: Board) {
        do {
            var move = parseFloat(prompt("Please make your move:"));
        } while (this.isInvalidMove(board, move));
        return move;
    }

    private isInvalidMove(board: Board, move: number): boolean {
        if (isNaN(move) || move % 1 != 0 || move < 1 || move > 9 || !this.isPlaceAvailable(board, move)) {
            alert("Please use only full numbers between 1-9!");
            return true;
        }
        return false;
    }

    private isPlaceAvailable(board: Board, move: number): boolean {
        return board.isMoveAvailable(move);
    }
}