import { Board } from './board'
class Game extends Board {
	constructor() {
		super();
		this.killedWhite = [];
		this.killedBlack = [];
		this.moveCounter = 0;
		this.checkMoveColor = 0;
		this.moves = [];
		this.possibleMoves = [];
	}
	getMoves(start) {
		if (this.field[start.y][start.x] === null) {
			console.log('Error! The cell is empty');
		} else {
			const moves = this.field[start.y][start.x].getMoves(this.field, start).map(item => item.join(','));
			console.log(moves)
			this.possibleMoves = moves;
		}
	};
	move(start, end) {
		const stringEnd = Object.values(end).join(',');

		if (this.field[start.y][start.x].name === 'King' && this.field[start.y][start.x].color === 'white' && possibleMoves.length === 0) {
			console.log('Game over, black won')
		}
		if (this.field[start.y][start.x].name === 'King' && this.field[start.y][start.x].color === 'black' && possibleMoves.length === 0) {
			console.log('Game over, black won')
		}
		if (this.checkMoveColor === 0 && this.field[start.y][start.x].color === 'white') {
			if (this.possibleMoves.includes(stringEnd)) {
				this.moves.push(start, end)
				this.killedBlack.push(this.field[end.y][end.x])
				this.field[end.y][end.x] = this.field[start.y][start.x];
				this.field[start.y][start.x] = null;
				this.moveCounter++;
				this.checkMoveColor++;
			}
		}
		else if (this.checkMoveColor === 1 && this.field[start.y][start.x].color === 'black') {
			if (this.possibleMoves.includes(stringEnd)) {
				this.moves.push(start, end)
				this.killedWhite.push(this.field[end.y][end.x])
				this.field[end.y][end.x] = this.field[start.y][start.x];
				this.field[start.y][start.x] = null;
				this.moveCounter++;
				this.checkMoveColor--;
			}
		}

		// Возможность менять пешку на любую другую фигуру. (меняем на ферзя)

		if (end.y === 7 && new Pawn('white') || end.y === 0 && new Pawn('black')) {
			// let result = +prompt('Choose figure: "1" - queen, "2" - bishop, "3" - rook, "4" - knight ', '1')
			let result = 1;
			if (new Pawn('white')) {
				if (result === 1) {
					this.field[end.y][end.x] = new Queen('white')
				}
				if (result === 2) {
					this.field[end.y][end.x] = new Bishop('white')
				}
				if (result === 3) {
					this.field[end.y][end.x] = new Rook('white')
				}
				if (result === 4) {
					this.field[end.y][end.x] = new Knight('white')
				}
			} else if (new Pawn('black')) {
				let result = 1;
				if (result === 1) {
					this.field[end.y][end.x] = new Queen('black')
				}
				if (result === 2) {
					this.field[end.y][end.x] = new Bishop('black')
				}
				if (result === 3) {
					this.field[end.y][end.x] = new Rook('black')
				}
				if (result === 4) {
					this.field[end.y][end.x] = new Knight('black')
				}
			} else {
				return (`There is ${this.field[end.y][end.x]['name']} figure, unable to move there`)
			}
		}
	}
	showKilled() {
		console.log(this.killed);
	}
	showCounter() {
		console.log(this.moveCounter);
	}
	showMoves() {
		console.log(this.moves);
	}
	showField() {
		console.log(this.field)
	}
}


let game = new Game;

game.getMoves({ y: 1, x: 4 })
game.move({ y: 1, x: 4 }, { y: 3, x: 4 })
game.getMoves({ y: 6, x: 1 })
game.move({ y: 6, x: 1 }, { y: 4, x: 1 })
game.getMoves({ y: 3, x: 4 })



game.showCounter()
game.showMoves()
game.showField()
