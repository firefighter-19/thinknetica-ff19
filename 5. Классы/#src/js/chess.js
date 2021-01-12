class Bishop {
	constructor(color) {
		this.color = color;
		let name = 'Bishop';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinates = [
			{
				y: start.y + 1,
				x: start.x
			},
			{
				y: start.y + 2,
				x: start.x
			},
			{
				y: start.y + 3,
				x: start.x
			},
			{
				y: start.y + 4,
				x: start.x
			},
			{
				y: start.y + 5,
				x: start.x
			},
			{
				y: start.y + 6,
				x: start.x
			},
			{
				y: start.y + 7,
				x: start.x
			},
			{
				y: start.y,
				x: start.x - 1
			},
			{
				y: start.y,
				x: start.x - 2
			},
			{
				y: start.y,
				x: start.x - 3
			},
			{
				y: start.y,
				x: start.x - 4
			},
			{
				y: start.y,
				x: start.x - 5
			},
			{
				y: start.y,
				x: start.x - 6
			},
			{
				y: start.y,
				x: start.x - 7
			},
			{
				y: start.y,
				x: start.x + 1
			},
			{
				y: start.y,
				x: start.x + 2
			},
			{
				y: start.y,
				x: start.x + 3
			},
			{
				y: start.y,
				x: start.x + 4
			},
			{
				y: start.y,
				x: start.x + 5
			},
			{
				y: start.y,
				x: start.x + 6
			},
			{
				y: start.y,
				x: start.x + 7
			},
			{
				y: start.y - 1,
				x: start.x
			},
			{
				y: start.y - 2,
				x: start.x
			},
			{
				y: start.y - 3,
				x: start.x
			},
			{
				y: start.y - 4,
				x: start.x
			},
			{
				y: start.y - 5,
				x: start.x
			},
			{
				y: start.y - 6,
				x: start.x
			},
			{
				y: start.y - 7,
				x: start.x
			},
		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure === null || this.color !== figure.color) {
					return el
				}
				return false
			});

		const movesObj = boarders.slice(0, boarders.indexOf(false));
		const movesArr = movesObj.map(el => Object.values(el))

		return movesArr;
	}
}

class Knight {
	constructor(color) {
		this.color = color;
		let name = 'Knight';
		this.name = name;
	}
	getMoves(board, start) {
		let coordinates = [
			{
				y: start.y + 2,
				x: start.x + 1
			},
			{
				y: start.y + 2,
				x: start.x - 1
			},
			{
				y: start.y + 1,
				x: start.x + 2
			},
			{
				y: start.y - 1,
				x: start.x + 2
			},
			{
				y: start.y - 1,
				x: start.x - 2
			},
			{
				y: start.y + 1,
				x: start.x - 2
			},
			{
				y: start.y - 2,
				x: start.x - 1
			},
			{
				y: start.y - 2,
				x: start.x + 1
			},
		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure === null || this.color !== figure.color) {
					return el
				}
				return false
			});

		const movesObj = boarders.slice(0, boarders.indexOf(false));
		const movesArr = movesObj.map(el => Object.values(el))

		return movesArr;
	}
}

class Rook {
	constructor(color) {
		this.color = color;
		let name = 'Rook';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinates = [
			{
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y + 2,
				x: start.x + 2
			},
			{
				y: start.y + 3,
				x: start.x + 3
			},
			{
				y: start.y + 4,
				x: start.x + 4
			},
			{
				y: start.y + 5,
				x: start.x + 5
			},
			{
				y: start.y + 6,
				x: start.x + 6
			},
			{
				y: start.y + 7,
				x: start.x + 7
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},
			{
				y: start.y - 2,
				x: start.x - 2
			},
			{
				y: start.y - 3,
				x: start.x - 3
			},
			{
				y: start.y - 4,
				x: start.x - 4
			},
			{
				y: start.y - 5,
				x: start.x - 5
			},
			{
				y: start.y - 6,
				x: start.x - 6
			},
			{
				y: start.y - 7,
				x: start.x - 7
			},
			{
				y: start.y + 1,
				x: start.x - 1
			},
			{
				y: start.y + 2,
				x: start.x - 2
			},
			{
				y: start.y + 3,
				x: start.x - 3
			},
			{
				y: start.y + 4,
				x: start.x - 4
			},
			{
				y: start.y + 5,
				x: start.x - 5
			},
			{
				y: start.y + 6,
				x: start.x - 6
			},
			{
				y: start.y + 7,
				x: start.x - 7
			},
			{
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y - 2,
				x: start.x + 2
			},
			{
				y: start.y - 3,
				x: start.x + 3
			},
			{
				y: start.y - 4,
				x: start.x + 4
			},
			{
				y: start.y - 5,
				x: start.x + 5
			},
			{
				y: start.y - 6,
				x: start.x + 6
			},
			{
				y: start.y - 7,
				x: start.x + 7
			},
		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure === null || this.color !== figure.color) {
					return el
				}
				return false
			});

		const movesObj = boarders.slice(0, boarders.indexOf(false));
		const movesArr = movesObj.map(el => Object.values(el))

		return movesArr;
	}
}

class King {
	constructor(color) {
		this.color = color;
		let name = 'King';
		this.name = name;
	}
	getMoves(board, start) {
		let moves = [
			{
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y + 1,
				x: start.x - 1
			},
			{
				y: start.y + 1,
				x: start.x
			},
			{
				y: start.y,
				x: start.x + 1
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},
			{
				y: start.y - 1,
				x: start.x
			},
			{
				y: start.y,
				x: start.x - 1
			},
		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure === null || this.color !== figure.color) {
					return el
				}
				return false
			});

		const movesObj = boarders.slice(0, boarders.indexOf(false));
		const movesArr = movesObj.map(el => Object.values(el))

		return movesArr;
	}
}

class Queen {
	constructor(color) {
		this.color = color;
		let name = 'Queen';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinates = [
			{
				y: start.y + 1,
				x: start.x
			},
			{
				y: start.y + 2,
				x: start.x
			},
			{
				y: start.y + 3,
				x: start.x
			},
			{
				y: start.y + 4,
				x: start.x
			},
			{
				y: start.y + 5,
				x: start.x
			},
			{
				y: start.y + 6,
				x: start.x
			},
			{
				y: start.y + 7,
				x: start.x
			},
			{
				y: start.y,
				x: start.x - 1
			},
			{
				y: start.y,
				x: start.x - 2
			},
			{
				y: start.y,
				x: start.x - 3
			},
			{
				y: start.y,
				x: start.x - 4
			},
			{
				y: start.y,
				x: start.x - 5
			},
			{
				y: start.y,
				x: start.x - 6
			},
			{
				y: start.y,
				x: start.x - 7
			},
			{
				y: start.y,
				x: start.x + 1
			},
			{
				y: start.y,
				x: start.x + 2
			},
			{
				y: start.y,
				x: start.x + 3
			},
			{
				y: start.y,
				x: start.x + 4
			},
			{
				y: start.y,
				x: start.x + 5
			},
			{
				y: start.y,
				x: start.x + 6
			},
			{
				y: start.y,
				x: start.x + 7
			},
			{
				y: start.y - 1,
				x: start.x
			},
			{
				y: start.y - 2,
				x: start.x
			},
			{
				y: start.y - 3,
				x: start.x
			},
			{
				y: start.y - 4,
				x: start.x
			},
			{
				y: start.y - 5,
				x: start.x
			},
			{
				y: start.y - 6,
				x: start.x
			},
			{
				y: start.y - 7,
				x: start.x
			},
			{
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y + 2,
				x: start.x + 2
			},
			{
				y: start.y + 3,
				x: start.x + 3
			},
			{
				y: start.y + 4,
				x: start.x + 4
			},
			{
				y: start.y + 5,
				x: start.x + 5
			},
			{
				y: start.y + 6,
				x: start.x + 6
			},
			{
				y: start.y + 7,
				x: start.x + 7
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},
			{
				y: start.y - 2,
				x: start.x - 2
			},
			{
				y: start.y - 3,
				x: start.x - 3
			},
			{
				y: start.y - 4,
				x: start.x - 4
			},
			{
				y: start.y - 5,
				x: start.x - 5
			},
			{
				y: start.y - 6,
				x: start.x - 6
			},
			{
				y: start.y - 7,
				x: start.x - 7
			},
			{
				y: start.y + 1,
				x: start.x - 1
			},
			{
				y: start.y + 2,
				x: start.x - 2
			},
			{
				y: start.y + 3,
				x: start.x - 3
			},
			{
				y: start.y + 4,
				x: start.x - 4
			},
			{
				y: start.y + 5,
				x: start.x - 5
			},
			{
				y: start.y + 6,
				x: start.x - 6
			},
			{
				y: start.y + 7,
				x: start.x - 7
			},
			{
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y - 2,
				x: start.x + 2
			},
			{
				y: start.y - 3,
				x: start.x + 3
			},
			{
				y: start.y - 4,
				x: start.x + 4
			},
			{
				y: start.y - 5,
				x: start.x + 5
			},
			{
				y: start.y - 6,
				x: start.x + 6
			},
			{
				y: start.y - 7,
				x: start.x + 7
			}
		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure === null || this.color !== figure.color) {
					return el
				}
				return false
			});

		const movesObj = boarders.slice(0, boarders.indexOf(false));
		const movesArr = movesObj.map(el => Object.values(el))

		return movesArr;
	}
}

class Pawn {
	constructor(color) {
		this.notMoved = true;
		this.color = color;
		let name = 'Pawn';
		this.name = name;
	}
	getMoves(board, start) {

		const allowedMoves = [];

		if (board[start.y + 1][start.x] === null) {
			allowedMoves.push([start.y + 1, start.x])
		}
		if (this.notMoved && board[start.y + 2][start.x] === null && board[start.y + 1][start.x] === null) {
			allowedMoves.push([start.y + 2, start.x])
		}
		if (board[start.y + 1][start.x + 1] && this.color !== board[start.y + 1][start.x + 1]['color']) {
			allowedMoves.push([start.y + 1, start.x + 1])
		}
		if (board[start.y + 1][start.x - 1] && this.color !== board[start.y + 1][start.x - 1]['color']) {
			allowedMoves.push([start.y + 1, start.x - 1])
		}

		this.notMoved = false;

		return allowedMoves;
	}
}

class Board {
	constructor() {
		this.field = [
			[new Bishop('white'), new Knight('white'), new Rook('white'), new Queen('white'), new King('white'), new Rook('white'), new Knight('white'), new Bishop('white')],
			[new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white')],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black')],
			[new Bishop('black'), new Knight('black'), new Rook('black'), new Queen('black'), new King('black'), new Rook('black'), new Knight('black'), new Bishop('black')]
		];
	}

	move(start, end) {
		const possibleMoves = this.field[start.y][start.x].getMoves(this.field, start).map(item => item.join(','));
		// console.log(possibleMoves)
		const stringEnd = Object.values(end).join(',');
		// console.log(stringEnd)

		if (possibleMoves.includes(stringEnd) && this.field[end.y][end.x] !== null) {
			console.log(`You've succefully attacked ${this.field[end.y][end.x]['name']} by ${this.field[start.y][start.x]['name']}`)
			this.field[end.y][end.x] = this.field[start.y][start.x];
			this.field[start.y][start.x] = null;
			return this.field;
		}
		if (possibleMoves.includes(stringEnd)) {
			console.log(`You've succefully moved to next cell by ${this.field[start.y][start.x]['name']}`)
			this.field[end.y][end.x] = this.field[start.y][start.x];
			this.field[start.y][start.x] = null;
			return this.field;
		}
		else {
			return (`There is ${this.field[end.y][end.x]['name']} figure, unable to move there`)
		}
	}
	showField() {
		console.log(this.field);
	}
}

let board = new Board;


console.log(board.move({ y: 1, x: 1 }, { y: 2, x: 1 }))
