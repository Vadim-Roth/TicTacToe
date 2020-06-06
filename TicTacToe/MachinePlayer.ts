class MachinePlayer extends Player {

    constructor() {
        super("Computer", Sign.O, new AutoNextMoveGenerator());
    }
}