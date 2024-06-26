function Tictactoe() {

    //the peaces of the game
    let player1;
    let player2;

    const gameBoard = {
        board: [
            ['X', 'X', 'O'],
            ['O', 'O', 'X'],
            ['X', '0', 'O']
        ]
    }


    function PlayerCreate(yourName) {
        const player = {
            playerName: yourName,
            choseX0: '',
            XO: function () { this.choseX0 = prompt('choose you character, X or O?') }
        }
        if (player1 == undefined) {
            player1 = player;
            player1.XO();

        } else {
            player2 = player;
            (player1.choseX0 == 'X')
                ? player2.choseX0 = 'O'
                : player2.choseX0 = 'X';
        }
    }


    function PutTokenInBoard(row, column, currentPlayer) {
        gameBoard.board[row][column] = (currentPlayer == player1) ? player1.choseX0 : player2.choseX0;
    }


    function VerifyVictory() {

        const testRowWin = (row) => {
            if (row.every(xo => xo == player1.choseX0)) {
                console.log('the winner is player1')
                return true
            } else if (row.every(xo => xo == player2.choseX0)) {
                console.log('the winner is player2')
                return true
            }
        };

        const testColumnWin = (cell, boardArray) => {
            if (boardArray.every(arrow => arrow[cell] == player1.choseX0)) {
                console.log('Win for the player1')
                return true
            } else if (boardArray.every(arrow => arrow[cell] == player2.choseX0)) {
                console.log('the winner is player2')
                return true
            }
        }

        const testDiagonalWin = (boardArray) => {
            const startDiagonalBoard = [boardArray[0][0], boardArray[1][1], boardArray[2][2]];
            const endDiagonalBoard = [boardArray[0][2], boardArray[1][1], boardArray[2][0]]
            if (startDiagonalBoard.every(xo => xo == player1.choseX0)) {
                console.log('won player1 in start diagonal')
                return true
            } else if (endDiagonalBoard.every(xo => xo == player1)) {
                console.log('won player1 in end diagonal')
                return true
            }

            if (startDiagonalBoard.every(xo => xo == player2.choseX0)) {
                console.log('won player2 in start diagonal')
                return true
            } else if (endDiagonalBoard.every(xo => xo == player2.choseX0)) {
                console.log('won player2 in end diagonal')
                return true
            }

        }

        const iterateBoard = (row, index, array) => {
            if (testRowWin(row)) {
                console.log(`row win true`);
                return true

            } else if (testColumnWin(index, array)) {
                console.log(`column win true`);
                return true

            } else if (testDiagonalWin(array)) {
                console.log(`Diagonal win true`);
                return true
            } 
            let newBoardArray = array.flat();
            if (newBoardArray.every(xo => xo =! '')){
                console.log("It's a tie");
                return true
            }
        }

        gameBoard.board.some(iterateBoard);
    }

    return {
        PlayerCreate,
        PutTokenInBoard,
        VerifyVictory,
        gameBoard,
        get getPlayer1() {
            return player1
        },
        get getPLayer2() {
            return player2
        }
    };
}
