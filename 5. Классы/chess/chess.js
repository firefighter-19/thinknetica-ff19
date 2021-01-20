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
	constructor(color, notMoved) {
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
			[new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black')],
			[new Bishop('black'), new Knight('black'), new Rook('black'), new Queen('black'), new King('black'), new Rook('black'), new Knight('black'), new Bishop('black')]
		];
	}
}

class Game extends Board {
	constructor() {
		super();
		this.killed = [];
		this.moveChecker = 0;
		this.moves = [];
	}

	move(start, end) {
		// this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		// this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
		// this.board = [];
		// this.letters.map(letter => this.numbers.forEach(num => this.board.push(letter + num)))
		// const position = this.board.map(item => this.field.push({ item }))
		// ==========================================  вопрос с присваиванием оставляем открытым ================ деструктуризация объекта нужна или new Map? ...

		const possibleMoves = this.field[start.y][start.x].getMoves(this.field, start).map(item => item.join(','));
		console.log(possibleMoves)
		const stringEnd = Object.values(end).join(',');
		// console.log(stringEnd)

		if (possibleMoves.includes(stringEnd)) {
			this.killed.push(this.field[end.y][end.x]) // пушим мертую в фигуру массив мертвых фигур - сделано
			this.field[end.y][end.x] = this.field[start.y][start.x];
			this.field[start.y][start.x] = null;
			if (this.field[end.y][end.x] === new Pawn) {
				this.notMoved = false;
			}
		}
		this.moves.push(start, end)
		return;

		// Возможность менять пешку на любую другую фигуру.

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
	}
	showKilled() {
		console.log(this.killed);
	}
	showCounter() {
		console.log(this.counter);
	}
	showMoves() {
		console.log(this.moves);
	}
	showField() {
		console.log(this.field)
	}
}

let game = new Game;


game.move({ y: 1, x: 1 }, { y: 2, x: 1 })
// game.move({ y: 2, x: 1 }, { y: 3, x: 1 })
game.showField()
// game.numerable()
// game.showCounter()
game.showMoves()

