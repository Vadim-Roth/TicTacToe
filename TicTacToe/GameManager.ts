class GameManager {

    private board: Board = new Board();
    private players: Array<Player>;
    private drawer: SerialDrawer = new SerialDrawer();
    private scoreBoard: Score = new Score();
    private element: HTMLElement;

    public constructor(id: HTMLElement) {
        // reset board
        this.board.reset();
        this.element = id;
    }

    public play(): void {
        // prepare
        this.players = this.getPlayers();   
        this.newGame();
    }

    /********************* private methods **********************/

    private handleGameEnd() : void {
        let winner = this.board.getWinner();
        if (winner == undefined) {
            alert("Draw. No winner...");
        }
        else {
            winner == this.players[0].sign ? this.scoreBoard.humanWin() : this.scoreBoard.aiWin();

            this.scoreBoard.scoreFuncs();
            alert(`${winner == this.players[0].sign ? this.players[0].name : this.players[1].name} is the winner!`);
        }
        let btn = document.getElementById("refresh");
        btn.addEventListener("click", (e: Event) => this.newGame());
    }

    private newGame(): void {
        this.board.reset();
        this.drawUpdate();
        // start the 1st turn
        this.playOne(0);
    }

    private drawUpdate() {
        this.element.innerHTML = "";
        this.element.innerHTML += this.drawer.drawBoard(this.board);
        this.element.innerHTML += this.scoreBoard.drawScore();
        this.scoreBoard.scoreFuncs();
    }

    private playOne(playerIndex: number) : void {
        if (this.hasGameEnded(this.board)) {
            this.handleGameEnd();
            return;
        }
        
        let currentPlayer = this.players[playerIndex];
        let nextMove = currentPlayer.getNextMove(this.board);
        this.board.placeMove(nextMove, currentPlayer.sign);
        this.drawUpdate();

        let nextPlayerIndex = (playerIndex + 1) % 2;
        this.playOne(nextPlayerIndex);
    }

    private hasGameEnded(board: Board): boolean {
        if (board.steps < 4) {
            return false;
        }
        if (board.steps == 9) {
            return true;
        }
        if (board.checkSetWin())
            return true;
        return false; 
    }

    private getPlayers(): Array<Player> {
        let players = new Array<Player>(2);
        players[0] = this.getHumanPlayer();
        players[1] = this.getMachinePlayer();
        return players;
    }

    private getHumanPlayer(): Player {
        let playerName = prompt("Please enter your name:");
        if (playerName == "")
            playerName = "Human";
        this.scoreBoard.getName(playerName);
        return new HumanPlayer(playerName);
    }

    private getMachinePlayer(): Player {
        return new MachinePlayer();
    }
}