function sortMoves(board, arr, color) {
	let borderSort = arr.filter(el => el.y >= 0 && el.x < 8 && el.y < 8 && el.x >= 0)
	// .map(el => board[el.y][el.x] === null ? el : false)

	let cellSort = borderSort.map(el => board[el.y][el.x] === null || board[el.y][el.x].color !== color ? el : false);

	let enemySort = cellSort.filter(el => board[el.y][el.x] !== null && board[el.y][el.x].color !== color);

	console.log(enemySort.splice(1))

	// console.log(borderSort)
	let sorted = cellSort;
	for (let key of cellSort) {
		if (key === false) {
			sorted = cellSort.slice(0, cellSort.indexOf(false));
		}
	}
	// ПОДУМОТЬ ТУТ

	return sorted;
}

export { sortMoves }

// || board[el.y][el.x].color !== color