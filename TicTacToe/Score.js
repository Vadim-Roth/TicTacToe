var Score = /** @class */ (function () {
    function Score() {
        this.wins = [0, 0];
    }
    Score.prototype.drawScore = function () {
        var scoreString = "";
        scoreString += "<table><th><font color='red' id = 'hp' ></font></th >";
        scoreString += "<th><font color='blue' > AI </font></th >";
        scoreString += "<tr><td><span id='playerSpan' > </span></td >";
        scoreString += "<td><span id='aiSpan' > </span></td ></tr>< /table><br / >";
        return scoreString;
    };
    Score.prototype.scoreFuncs = function () {
        document.getElementById("playerSpan").innerHTML = this.wins[0].toString();
        document.getElementById("aiSpan").innerHTML = this.wins[1].toString();
        document.getElementById("hp").innerHTML = this.playerName;
    };
    Score.prototype.getName = function (playerName) {
        this.playerName = playerName;
    };
    Score.prototype.humanWin = function () {
        this.wins[0]++;
    };
    Score.prototype.aiWin = function () {
        this.wins[1]++;
    };
    return Score;
}());
//# sourceMappingURL=Score.js.map