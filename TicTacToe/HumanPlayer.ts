class HumanPlayer extends Player {

    constructor(name: string) {
        super(name, Sign.X, new ManualNextMoveGenerator());
    }
}