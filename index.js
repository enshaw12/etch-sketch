let color = 'black';
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');


function populateBoard() {
    board.style.gridTemplateColumns = 'repeat(16, 1fr)';
    board.style.gridTemplateRows = 'repeat(16, 1fr)';
    for (i = 0; i < 256 ; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', colorChange)
        board.insertAdjacentElement('beforeend', square);
    }
};

populateBoard();

function resetBoard() {
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    populateBoard();
};

function colorChoice(choice) {
    color = choice;
}

function colorChange() {
    this.style.backgroundColor = color
}


