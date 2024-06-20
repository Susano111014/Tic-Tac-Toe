function Tictactoe() {

    let player1;
    let player2;

    const PlayerCreate = function (yourName) {
        const player = {
            playerName: yourName,
            choseX0 : '',
            XO: function () { this.choseX0 = prompt('choose you character, X or O?')}
        }
        if (player1 == undefined) {
            player1 = player;
            player1.XO();
        } else if (player1.choseX0 == 'X') {
            player2 = player;
            player2.choseX0 = 'O';
        }
        return player;
    }

    // const gameBoard = {
    //     board: [
    //         ['', '', ''],
    //         ['', '', ''],
    //         ['', '', '']
    //     ]
    // }

    return { PlayerCreate };

    //    function ifIsWin() {
    //         gameBoard.board.every((row, index) => row[index] ===  )  
    //    }
};

