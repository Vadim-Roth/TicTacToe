abstract class Player {
    private readonly nameField: string;
    private readonly signField: Sign;
    private readonly nextMoveGeneratorField: INextMoveGenerator;

    constructor(name: string, sign: Sign, nextMoveGenerator: INextMoveGenerator) {
        this.nameField = name;
        this.signField = sign;
        this.nextMoveGeneratorField = nextMoveGenerator;
    }

    get name(): string {
        return this.nameField;
    }

    get sign(): Sign {
        return this.signField;
    }

    public getNextMove(board: Board): number {
        return this.nextMoveGeneratorField.getNextMove(board);
    }
}