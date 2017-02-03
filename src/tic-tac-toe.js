class TicTacToe {
   constructor() {
        this.player = 'x';
        this.filledArea = 0;
        this.area = [];
        for (var i = 0; i < 3; i++)
        {
            this.matrix[i] = [];
            for (var j = 0; j < 3; j++)
            {
                this.area[i][j] = null;
            }
        }
        
    }

    getCurrentPlayerSymbol() {
        return this.player;

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.area (rowIndex, columnIndex) === null)
            return this.area (rowIndex, columnIndex) = this.player;
        if (this.player = 'x')
            return this.player = 'o'
        else 
            return this.player = 'x';
    

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

    }
}
module.exports = TicTacToe;
