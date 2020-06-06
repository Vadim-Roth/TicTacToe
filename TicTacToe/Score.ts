class Score {
    private wins: Array<number> = [0, 0];
    private playerName: string;

    drawScore(): string {
        let scoreString: string = "";
        scoreString += "<table><th><font color='red' id = 'hp' ></font></th >";
        scoreString += "<th><font color='blue' > AI </font></th >";
        scoreString += "<tr><td><span id='playerSpan' > </span></td >";
        scoreString += "<td><span id='aiSpan' > </span></td ></tr>< /table><br / >";
        return scoreString;
    }

    public scoreFuncs() {
        document.getElementById("playerSpan").innerHTML = this.wins[0].toString();
        document.getElementById("aiSpan").innerHTML = this.wins[1].toString();
        document.getElementById("hp").innerHTML = this.playerName;
    }

    public getName(playerName: string): void {
        this.playerName = playerName;
    }

    public humanWin() {
        this.wins[0]++;
    }
    public aiWin() {
        this.wins[1]++;
    }

}