class TicTacToe {
    constructor() {
        this.area = [[null],[null],[null], [null],[null],[null],[null],[null],[null]];
        this.player = 'x';

    }

    getCurrentPlayerSymbol() {
        return this.player

    }

    nextTurn(rowIndex, columnIndex) {

        if (this.area(rowIndex, columnIndex) == null)
            return this.area(rowIndex, columnIndex) = this.player;
        if (this.player = 'x')
            return this.player = 'o'
        else 
            return this.player = 'x'

    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
