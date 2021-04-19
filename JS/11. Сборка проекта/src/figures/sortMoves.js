function sortMoves(board, arr, color) {
	let borderSort = arr.filter(el => el.y >= 0 && el.x < 8 && el.y < 8 && el.x >= 0)
	// .map(el => board[el.y][el.x] === null ? el : false)

	let cellSort = borderSort.map(el => board[el.y][el.x] === null || board[el.y][el.x].color !== color ? el : false);

	// let enemySort = cellSort.map(el => {
	// 	if (!undefined) {
	// 		console.log(board[el.y][el.x])

	// 	}
	// if (board[el.y][el.x] !== null) {
	// 	cellSort.indexOf(board[el.y][el.x].color !== color)
	// }
	// });
	console.log(cellSort)
	// let enemySortCells = enemySort.map(el => board[el.y][el.x].color !== color);

	// console.log(enemySort.splice(1))

	let sorted = cellSort;
	for (let key of cellSort) {
		if (key === false) {
			sorted = cellSort.slice(0, cellSort.indexOf(false));
		}
	}
	// console.log(enemySortCells)

	return sorted;
}

export { sortMoves }

// || board[el.y][el.x].color !== color