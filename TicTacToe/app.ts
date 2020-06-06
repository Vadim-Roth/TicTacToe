function startGame(): void {
    let divId = document.getElementById("content");
    let gm = new GameManager(divId);
    gm.play();
}
