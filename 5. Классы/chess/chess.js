class Bishop {
	constructor(color) {
		this.color = color;
		let name = 'Bishop';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinates = [];

		for (let i = 0; i < 8; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x },
				{ y: start.y, x: start.x + i },
				{ y: start.y - i, x: start.x },
				{ y: start.y, x: start.x - i }
			)
		}

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
		const coordinates = [];

		for (let i = 0; i < 8; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x + i },
				{ y: start.y - i, x: start.x - i },
				{ y: start.y + i, x: start.x - i },
				{ y: start.y - i, x: start.x + i }
			)
		}

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
		const coordinates = [];

		for (let i = 1; i <= 1; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x },
				{ y: start.y - i, x: start.x },
				{ y: start.y + i, x: start.x + i },
				{ y: start.y - i, x: start.x + i },
				{ y: start.y, x: start.x + i },
				{ y: start.y, x: start.x - i }
			)
		}
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

		const coordinates = [];

		for (let i = 0; i < 8; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x + i },
				{ y: start.y - i, x: start.x - i },
				{ y: start.y + i, x: start.x - i },
				{ y: start.y - i, x: start.x + i },
				{ y: start.y + i, x: start.x },
				{ y: start.y, x: start.x + i },
				{ y: start.y - i, x: start.x },
				{ y: start.y, x: start.x - i }
			)
		}

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
		// this.flague = flague;
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
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y + 1,
				x: start.x - 1
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
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},

		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure !== null && figure.color !== this.color || figure === null && el.x === start.x) {
					return el
				} else {
					return false
				}
			})
			.map(el => this.color === 'white' && el.y > start.y ? el : false);

		this.notMoved = false;

		const movesObj = boarders.slice(0, boarders.indexOf(false));
		const movesArr = movesObj.map(el => Object.values(el))

		return movesArr;
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
			[null, new Pawn('white'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black')],
			[new Bishop('black'), null, new Rook('black'), new Queen('black'), new King('black'), new Rook('black'), new Knight('black'), new Bishop('black')]
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
		}
		if (possibleMoves.includes(stringEnd)) {
			console.log(`You've succefully moved to next cell by ${this.field[start.y][start.x]['name']}`)
			this.field[end.y][end.x] = this.field[start.y][start.x];
			this.field[start.y][start.x] = null;
		}
		// if (end.y === 7 && new Pawn('white') || end.y === 0 && new Pawn('black')) {
		// let result = +prompt('Choose figure: "1" - queen, "2" - bishop, "3" - rook, "4" - knight ', '1')
		// let result = '1';
		// if (new Pawn('white')) {
		// 	if (result = 1) {
		// 		this.field[end.y][end.x] = new Queen('white')
		// 	}
		// if (result = 2) {
		// 	this.field[end.y][end.x] = new Bishop('white')
		// }
		// if (result = 3) {
		// 	this.field[end.y][end.x] = new Rook('white')
		// }
		// if (result = 4) {
		// 	this.field[end.y][end.x] = new Knight('white')
		// }
		// } else if (new Pawn('black')) {
		// 	if (result = 1) {
		// 		this.field[end.y][end.x] = new Queen('black')
		// 	}
		// 	if (result = 2) {
		// 		this.field[end.y][end.x] = new Bishop('black')
		// 	}
		// 	if (result = 3) {
		// 		this.field[end.y][end.x] = new Rook('black')
		// 	}
		// 	if (result = 4) {
		// 		this.field[end.y][end.x] = new Knight('black')
		// 	}
		// } else {
		// 	return (`There is ${this.field[end.y][end.x]['name']} figure, unable to move there`)
		// }
		return
	}
	showField() {
		console.log(this.field);
	}
}

let board = new Board;


board.move({ y: 6, x: 1 }, { y: 7, x: 1 })
board.showField()

