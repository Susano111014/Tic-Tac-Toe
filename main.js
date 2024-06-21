function Tictactoe() {

    let player1;
    let player2;


    function PlayerCreate (yourName) {
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

    const gameBoard = {
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    function PutTokenInBoard (row, column, currentPlayer) {
        gameBoard.board[row][column] = (currentPlayer == player1) ? player1.choseX0 : player2.choseX0;
    }

    return { PlayerCreate, 
        PutTokenInBoard, 
        get getPlayer1 () {
            return player1
        },
        get getPLayer2 () {
            return player2
        }
    };

};
