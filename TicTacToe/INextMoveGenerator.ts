interface INextMoveGenerator {

    getNextMove(board: Board, playerMove ?: number): number;
}