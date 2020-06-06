class Board {
    private privateBoard: Array<Sign>;
    private stepCounter: number;
    private lastMove: number;

    private winSets = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];

    // Compares between the content of the winning sets and the private board to check if there is a winner 
    public checkSetWin(): boolean {
        for (let i = 0; i < this.winSets.length; i++) {
            if (this.privateBoard[this.winSets[i][0]] == this.privateBoard[this.winSets[i][1]] &&
                this.privateBoard[this.winSets[i][0]] == this.privateBoard[this.winSets[i][2]] &&
                this.privateBoard[this.winSets[i][0]] != Sign.NONE) {
                return true;
            }
        }
        return false;
    }

    get steps(): number {
        return this.stepCounter;
    }

    get winningSets(): number[][] {
        return this.winSets;
    }

    get boardState(): Array<Sign> {
        // return a copy of the original array, 
        // to prevent some idiots to override cells of the original array...
        return new Array<Sign>(...this.privateBoard);
    }

    public reset(): void {
        this.privateBoard = new Array<Sign>(10);
        for (var i = 0; i < this.privateBoard.length; i++) {
            this.privateBoard[i] = Sign.NONE;
        }
        this.stepCounter = 0;
    }

    public placeMove(move: number, sign: Sign): void {

        // this is not supposed to happen during our game...
        if (!this.isMoveAvailable(move)) {
            throw new Error(`Cell ${move} is already taken!`);
        }

        this.privateBoard[move] = sign;
        this.stepCounter++;
        this.lastMove = move;
    }

    public getWinner(): Sign {
        if (this.stepCounter == 9) {
            return undefined;
        }
        return this.privateBoard[this.lastMove];
    }

    public isMoveAvailable(move: number): boolean {
        if (move < 1 || move > 9) {
            return false;
        }
        return this.privateBoard[move] == Sign.NONE;
    }


}