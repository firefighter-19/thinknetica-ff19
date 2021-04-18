import { Rook } from './figures/rook'
import { Knight } from './figures/knight'
import { Bishop } from './figures/bishop'
import { King } from './figures/king'
import { Queen } from './figures/queen'
import { Pawn } from './figures/pawn'

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

export { Board }