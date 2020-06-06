var GameManager = /** @class */ (function () {
    function GameManager(id) {
        this.board = new Board();
        this.drawer = new SerialDrawer();
        this.scoreBoard = new Score();
        // reset board
        this.board.reset();
        this.element = id;
    }
    GameManager.prototype.play = function () {
        // prepare
        this.players = this.getPlayers();
        this.newGame();
    };
    /********************* private methods **********************/
    GameManager.prototype.handleGameEnd = function () {
        var _this = this;
        var winner = this.board.getWinner();
        if (winner == undefined) {
            alert("Draw. No winner...");
        }
        else {
            winner == this.players[0].sign ? this.scoreBoard.humanWin() : this.scoreBoard.aiWin();
            this.scoreBoard.scoreFuncs();
            alert((winner == this.players[0].sign ? this.players[0].name : this.players[1].name) + " is the winner!");
        }
        var btn = document.getElementById("refresh");
        btn.addEventListener("click", function (e) { return _this.newGame(); });
    };
    GameManager.prototype.newGame = function () {
        this.board.reset();
        this.drawUpdate();
        // start the 1st turn
        this.playOne(0);
    };
    GameManager.prototype.drawUpdate = function () {
        this.element.innerHTML = "";
        this.element.innerHTML += this.drawer.drawBoard(this.board);
        this.element.innerHTML += this.scoreBoard.drawScore();
        this.scoreBoard.scoreFuncs();
    };
    GameManager.prototype.playOne = function (playerIndex) {
        if (this.hasGameEnded(this.board)) {
            this.handleGameEnd();
            return;
        }
        var currentPlayer = this.players[playerIndex];
        var nextMove = currentPlayer.getNextMove(this.board);
        this.board.placeMove(nextMove, currentPlayer.sign);
        this.drawUpdate();
        var nextPlayerIndex = (playerIndex + 1) % 2;
        this.playOne(nextPlayerIndex);
    };
    GameManager.prototype.hasGameEnded = function (board) {
        if (board.steps < 4) {
            return false;
        }
        if (board.steps == 9) {
            return true;
        }
        if (board.checkSetWin())
            return true;
        return false;
    };
    GameManager.prototype.getPlayers = function () {
        var players = new Array(2);
        players[0] = this.getHumanPlayer();
        players[1] = this.getMachinePlayer();
        return players;
    };
    GameManager.prototype.getHumanPlayer = function () {
        var playerName = prompt("Please enter your name:");
        if (playerName == "")
            playerName = "Human";
        this.scoreBoard.getName(playerName);
        return new HumanPlayer(playerName);
    };
    GameManager.prototype.getMachinePlayer = function () {
        return new MachinePlayer();
    };
    return GameManager;
}());
//# sourceMappingURL=GameManager.js.map