export const findUniqueValues = (arr) => {
	let newArr = arr.filter((value, index, self) => {
		console.log(value.title);
		return (
			self.findIndex((v) => v.album.title == value.album.title) == index
		);
	});

	return newArr;
};
