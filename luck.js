$(document).ready(function() {

	console.log("DOCUMENT READY");

	const luckyRanges = [
		[50, 100],
		[200, 300],
		[400, 480]
	];

	function numInRange(start, stop) {
		list = [];

		[...Array(stop - start).keys()].forEach(function(i) {
			i += start;
			list.push(i);
		});

		return list;
	}

	function RandomInRange(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	let luckyNumbers = [];

	luckyRanges.forEach(function(range) {
		let nums = numInRange(range[0], range[1]);

		luckyNumbers = luckyNumbers.concat(nums);

		console.log(luckyNumbers);
	
	});

	$(document).click(function() {

		let index = RandomInRange(0, luckyNumbers.length);

		let luckyNumber = luckyNumbers[index];
		luckyNumbers.splice(index, 1);

		console.log(luckyNumber);

		$("#luck").text(luckyNumber);
	});	

});
