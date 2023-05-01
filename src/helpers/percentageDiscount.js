const percentageDiscount = (newNamber, oldNamber) => {
	const discount = Math.round((newNamber * 100) / oldNamber);
	return discount;
};
export default percentageDiscount;
