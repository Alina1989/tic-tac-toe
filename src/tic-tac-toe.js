class TicTacToe {

    constructor() {
        this.area = [];
        this.player = true;
        this.filledArea = 0;
        
        for (var i = 0; i < 3; i++)
        {
            this.area[i] = [];
            for (var j = 0; j < 3; j++)
            {
                this.area[i][j] = null;
            }
        }
        
    }

    getCurrentPlayerSymbol() { 
        if (this.player)
            return this.player = 'x';

    }

    nextTurn(rowIndex, columnIndex) { 

        if (this.area)
            return this.area === this.player;
        if (this.player = 'x')
            return this.player = 'x'
        else 
            return this.player = 'o';
    

    }

    isFinished() { if (this.getWinner() || this.isDraw()) {
            return true;
        }
        else {
            return false;
        }
       

    }

    getWinner() {  // rows

        if ( this.area[0][0] === this.area[0][1] === this.area[0][2] === 'x' || this.area[1][0] === this.area[1][1] === this.area[1][2] === 'x' || 
        this.area[2][0] === this.area[2][1] === this.area[2][2] === 'x')
            return this.getWinner
        else if (this.area[0][0] === this.area[0][1] === this.area[0][2] === 'o' || this.area[1][0] === this.area[1][1] === this.area[1][2] === 'o' || 
        this.area[2][0] === this.area[2][1] === this.area[2][2] === 'o')
            return this.getWinner;

        // columns

        if ( this.area[0][0] === this.area[1][0] === this.area[2][0] === 'x' || this.area[0][1] === this.area[1][1] === this.area[2][1] === 'x' || 
        this.area[2][0] === this.area[2][1] === this.area[2][2] === 'x')
            return this.getWinner
        else if (this.area[0][0] === this.area[1][0] === this.area[2][0] === 'o' || this.area[0][1] === this.area[1][1] === this.area[2][1] === 'o' || 
        this.area[0][2] === this.area[1][2] === this.area[2][2] === 'o')
            return this.getWinner;

        // diagonals

         if (this.area[0][0] === this.area[1][1] === this.area[2][2] === 'o' || this.area[2][0] === this.area[1][1] === this.area[0][2] === 'o')
            return getWinner
        else if (this.area[0][0] === this.area[1][1] === this.area[2][2] === 'o' || this.area[2][0] === this.area[1][1] === this.area[0][2] === 'o')
            return this.getWinner; 



    }

    noMoreTurns() { 
        for (var i = 0; i <= 2; ++i) {
               for (var j = 0; j <= 2; ++j) {
                    if (this.area[i][j] == null) {
                         return false;
                    }
               }
          }

          return true;


    }

    isDraw() { 

    }

    getFieldValue(rowIndex, colIndex) {

        
        if (this.area[rowIndex][colIndex] === null)
            return this.getCurrentPlayerSymbol() === 'x'

    }
}
module.exports = TicTacToe;
