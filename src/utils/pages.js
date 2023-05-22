export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPage) => {
	let result = [];
	for (let i = 0; i < totalPage; i++) {
		result.push(i + 1);

	}
	return result;
}

