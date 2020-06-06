var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Board = /** @class */ (function () {
    function Board() {
        this.winSets = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7]];
    }
    // Compares between the content of the winning sets and the private board to check if there is a winner 
    Board.prototype.checkSetWin = function () {
        for (var i = 0; i < this.winSets.length; i++) {
            if (this.privateBoard[this.winSets[i][0]] == this.privateBoard[this.winSets[i][1]] &&
                this.privateBoard[this.winSets[i][0]] == this.privateBoard[this.winSets[i][2]] &&
                this.privateBoard[this.winSets[i][0]] != Sign.NONE) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(Board.prototype, "steps", {
        get: function () {
            return this.stepCounter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "winningSets", {
        get: function () {
            return this.winSets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "boardState", {
        get: function () {
            // return a copy of the original array, 
            // to prevent some idiots to override cells of the original array...
            return new (Array.bind.apply(Array, __spreadArrays([void 0], this.privateBoard)))();
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.reset = function () {
        this.privateBoard = new Array(10);
        for (var i = 0; i < this.privateBoard.length; i++) {
            this.privateBoard[i] = Sign.NONE;
        }
        this.stepCounter = 0;
    };
    Board.prototype.placeMove = function (move, sign) {
        // this is not supposed to happen during our game...
        if (!this.isMoveAvailable(move)) {
            throw new Error("Cell " + move + " is already taken!");
        }
        this.privateBoard[move] = sign;
        this.stepCounter++;
        this.lastMove = move;
    };
    Board.prototype.getWinner = function () {
        if (this.stepCounter == 9) {
            return undefined;
        }
        return this.privateBoard[this.lastMove];
    };
    Board.prototype.isMoveAvailable = function (move) {
        if (move < 1 || move > 9) {
            return false;
        }
        return this.privateBoard[move] == Sign.NONE;
    };
    return Board;
}());
//# sourceMappingURL=Board.js.map