let color = 'black';

function populateBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    board.style.gridTemplateColumns = 'repeat(16, 1fr)';
    board.style.gridTemplateRows = 'repeat(16, 1fr)';
    for (i = 0; i < 256 ; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard();