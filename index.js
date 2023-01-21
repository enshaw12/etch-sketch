let color = 'black';
let board = document.querySelector('.board');




function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    amountDivs = size * size;
    for (i = 0; i < amountDivs ; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', colorChange)
        board.insertAdjacentElement('beforeend', square);
    }
};

populateBoard(16);

function resetBoard(value) {
    let squares = board.querySelectorAll('div');
    squares.forEach((square) => square.style.backgroundColor = 'white');
};

function colorChoice(choice) {
    color = choice;
}

function colorChange() {
    this.style.backgroundColor = color
}

function changeBoardSize(userInput) {
    if (userInput >= 2 && userInput <= 100) {
        populateBoard(userInput);
    } else {
        console.log("input must be greater than 1 and less than 101");
    }
    

}

