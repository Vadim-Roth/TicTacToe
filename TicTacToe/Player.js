var Player = /** @class */ (function () {
    function Player(name, sign, nextMoveGenerator) {
        this.nameField = name;
        this.signField = sign;
        this.nextMoveGeneratorField = nextMoveGenerator;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this.nameField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "sign", {
        get: function () {
            return this.signField;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.getNextMove = function (board) {
        return this.nextMoveGeneratorField.getNextMove(board);
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map