function setMap0003() {

	mapW = 50, mapH = 50;

	gameMap = [

		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0,51, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5,51, 0,51, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0,51, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 0, 0, 2, 2, 0, 2, 0, 2, 0, 2, 0,51, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 0, 2, 2, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,51, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0,51, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0,
		0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2, 0,
		0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0,
		0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 2, 0, 1, 1, 1, 2, 2, 2, 2,51, 2, 2, 2, 2, 1, 1, 1, 0, 0, 2, 0, 2, 2, 2, 2, 0, 0, 0, 2, 0, 2, 2, 2, 0, 0,
		0, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 1, 1, 1, 2,51, 2, 2, 2, 2, 2,51, 2, 1, 1, 1, 0, 2, 2, 2, 0,51, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 0,
		0, 2, 2, 0, 2, 2, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0,50, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0,
		0, 2, 0, 2, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2, 0, 1, 1, 2, 2, 2, 1, 3, 3, 3, 1, 2, 2, 2, 1, 1, 0, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 2, 0,
		0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 2, 0, 2, 0, 1, 1, 2,51, 2, 1, 3, 1, 3, 1, 2,51, 2, 1, 1, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 0,
		0, 2, 0, 2, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2, 2, 0, 1, 1, 2, 2, 2, 1, 3, 3, 3, 1, 2, 2, 2, 1, 1, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0,
		0, 2, 2, 0, 2, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0,50, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0,51, 2, 2, 0, 2, 2, 0,
		0, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0, 0, 2, 2, 2, 2, 0, 1, 1, 1, 2,51, 2, 2, 2, 2, 2,51, 2, 1, 1, 1, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 0, 2, 0,
		0, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 1, 1, 1, 2, 2, 2, 2,51, 2, 2, 2, 2, 1, 1, 1, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2, 0, 2, 2, 0, 0, 2, 0,
		0, 2, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0,
		0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0,
		0,51, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 2, 2, 2, 0, 2, 2, 2,51, 2, 2, 2, 0, 2, 2, 2, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5,51, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 2, 0, 2, 2, 0, 0, 2, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0,
		0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5,51, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 0, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 2, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 0, 2, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5,51, 0, 2, 2, 2, 2, 2, 2, 2,51, 2, 2, 2, 2, 2, 0, 2, 0,51, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		
	];


	roofList = [
		{
			x: 1,
			y: 1,
			w: 15,
			h: 15,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 17,
			y: 1,
			w: 15,
			h: 15,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 33,
			y: 1,
			w: 16,
			h: 15,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 1,
			y: 17,
			w: 15,
			h: 15,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 33,
			y: 17,
			w: 16,
			h: 15,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 1,
			y: 33,
			w: 15,
			h: 16,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 17,
			y: 33,
			w: 15,
			h: 16,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		},
		{
			x: 33,
			y: 33,
			w: 16,
			h: 16,
			data: [
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
	]
		}
	]
}

function populateMap0003() {

	//posicion inicial

	player.placeAt(16, 22);

	//teletransportes

	mapTileData.map[((21 + 21 * mapW))].eventEnter = function () {
		player.placeAt(1, 1)
	};
	mapTileData.map[((15 + 1 * mapW))].eventEnter = function () {
		player.placeAt(21, 21)
	};
	mapTileData.map[((24 + 20 * mapW))].eventEnter = function () {
		player.placeAt(17, 1)
	};
	mapTileData.map[((30 + 3 * mapW))].eventEnter = function () {
		player.placeAt(24, 20)
	};
	mapTileData.map[((27 + 21 * mapW))].eventEnter = function () {
		player.placeAt(33, 1)
	};
	mapTileData.map[((48 + 15 * mapW))].eventEnter = function () {
		player.placeAt(27, 21)
	};
	mapTileData.map[((28 + 24 * mapW))].eventEnter = function () {
		player.placeAt(37, 21)
	};
	mapTileData.map[((43 + 26 * mapW))].eventEnter = function () {
		player.placeAt(28, 24)
	};
	mapTileData.map[((27 + 27 * mapW))].eventEnter = function () {
		player.placeAt(48, 33)
	};
	mapTileData.map[((33 + 48 * mapW))].eventEnter = function () {
		player.placeAt(27, 27)
	};
	mapTileData.map[((24 + 28 * mapW))].eventEnter = function () {
		player.placeAt(24, 33)
	};
	mapTileData.map[((24 + 48 * mapW))].eventEnter = function () {
		player.placeAt(24, 28)
	};
	mapTileData.map[((21 + 27 * mapW))].eventEnter = function () {
		player.placeAt(15, 48)
	};
	mapTileData.map[((6 + 38 * mapW))].eventEnter = function () {
		player.placeAt(21, 27)
	};
	mapTileData.map[((20 + 24 * mapW))].eventEnter = function () {
		player.placeAt(1, 17)
	};
	mapTileData.map[((1 + 31 * mapW))].eventEnter = function () {
		player.placeAt(20, 24)
	};
	mapTileData.map[((16 + 26 * mapW))].eventEnter = function () {
		mapId=0015
		cambiarmapa();
		player.placeAt(16, 22);
	};

	//objetos de mapa
    
    var mo6 = new MapObject("mo6",4);
	mo6.placeAt(20, 18);
    
    var mo7 = new MapObject("mo7",1);
	mo7.placeAt(22, 18);
    
    var mo7 = new MapObject("mo5",2);
	mo7.placeAt(24, 18);
    
	var mo1 = new MapObject("mo1",3);
	mo1.placeAt(18, 18);
	var mo2 = new MapObject("mo2",3);
	mo2.placeAt(30, 18);
	var mo3 = new MapObject("mo3",3);
	mo3.placeAt(24, 24);
	var mo4 = new MapObject("mo4",3);
	mo4.placeAt(18, 30);
	var mo5 = new MapObject("mo5",3);
	mo5.placeAt(30, 30);
	//items
	var ps1 = new PlacedItemStack(1, 1);
	ps1.placeAt(7, 1);
	var ps2 = new PlacedItemStack(1, 1);
	ps2.placeAt(11, 1);
	var ps3 = new PlacedItemStack(1, 1);
	ps3.placeAt(15, 3);
	var ps4 = new PlacedItemStack(1, 1);
	ps4.placeAt(3, 4);
	var ps5 = new PlacedItemStack(1, 1);
	ps5.placeAt(1, 11);
	var ps6 = new PlacedItemStack(1, 1);
	ps6.placeAt(4, 12);
	var ps7 = new PlacedItemStack(1, 1);
	ps7.placeAt(9, 13);
	var ps8 = new PlacedItemStack(1, 1);
	ps8.placeAt(28, 1);
	var ps9 = new PlacedItemStack(1, 1);
	ps9.placeAt(17, 5);
	var ps10 = new PlacedItemStack(1, 1);
	ps10.placeAt(22, 5);
	var ps11 = new PlacedItemStack(1, 1);
	ps11.placeAt(25, 6);
	var ps12 = new PlacedItemStack(1, 1);
	ps12.placeAt(19, 8);
	var ps13 = new PlacedItemStack(1, 1);
	ps13.placeAt(25, 11);
	var ps14 = new PlacedItemStack(1, 1);
	ps14.placeAt(30, 11);
	var ps15 = new PlacedItemStack(1, 1);
	ps15.placeAt(25, 13);
	var ps16 = new PlacedItemStack(1, 1);
	ps16.placeAt(19, 15);
	var ps17 = new PlacedItemStack(1, 1);
	ps17.placeAt(21, 15);
	var ps18 = new PlacedItemStack(1, 1);
	ps18.placeAt(41, 1);
	var ps19 = new PlacedItemStack(1, 1);
	ps19.placeAt(39, 4);
	var ps20 = new PlacedItemStack(1, 1);
	ps20.placeAt(33, 6);
	var ps21 = new PlacedItemStack(1, 1);
	ps21.placeAt(48, 10);
	var ps22 = new PlacedItemStack(1, 1);
	ps22.placeAt(43, 11);
	var ps23 = new PlacedItemStack(1, 1);
	ps23.placeAt(40, 13);
	var ps24 = new PlacedItemStack(1, 1);
	ps24.placeAt(33, 15);
	var ps25 = new PlacedItemStack(1, 1);
	ps25.placeAt(37, 17);
	var ps26 = new PlacedItemStack(1, 1);
	ps26.placeAt(48, 21);
	var ps27 = new PlacedItemStack(1, 1);
	ps27.placeAt(38, 22);
	var ps28 = new PlacedItemStack(1, 1);
	ps28.placeAt(37, 23);
	var ps29 = new PlacedItemStack(1, 1);
	ps29.placeAt(37, 25);
	var ps30 = new PlacedItemStack(1, 1);
	ps30.placeAt(42, 25);
	var ps31 = new PlacedItemStack(1, 1);
	ps31.placeAt(46, 27);
	var ps32 = new PlacedItemStack(1, 1);
	ps32.placeAt(34, 29);
	var ps33 = new PlacedItemStack(1, 1);
	ps33.placeAt(43, 29);
	var ps34 = new PlacedItemStack(1, 1);
	ps34.placeAt(48, 31);
	var ps35 = new PlacedItemStack(1, 1);
	ps35.placeAt(33, 33);
	var ps36 = new PlacedItemStack(1, 1);
	ps36.placeAt(43, 34);
	var ps37 = new PlacedItemStack(1, 1);
	ps37.placeAt(40, 38);
	var ps38 = new PlacedItemStack(1, 1);
	ps38.placeAt(36, 39);
	var ps39 = new PlacedItemStack(1, 1);
	ps39.placeAt(42, 42);
	var ps40 = new PlacedItemStack(1, 1);
	ps40.placeAt(48, 43);
	var ps41 = new PlacedItemStack(1, 1);
	ps41.placeAt(39, 48);
	var ps42 = new PlacedItemStack(1, 1);
	ps42.placeAt(17, 33);
	var ps43 = new PlacedItemStack(1, 1);
	ps43.placeAt(26, 35);
	var ps44 = new PlacedItemStack(1, 1);
	ps44.placeAt(20, 36);
	var ps45 = new PlacedItemStack(1, 1);
	ps45.placeAt(31, 37);
	var ps46 = new PlacedItemStack(1, 1);
	ps46.placeAt(25, 39);
	var ps47 = new PlacedItemStack(1, 1);
	ps47.placeAt(19, 40);
	var ps48 = new PlacedItemStack(1, 1);
	ps48.placeAt(20, 43);
	var ps49 = new PlacedItemStack(1, 1);
	ps49.placeAt(25, 46);
	var ps50 = new PlacedItemStack(1, 1);
	ps50.placeAt(29, 46);
	var ps51 = new PlacedItemStack(1, 1);
	ps51.placeAt(17, 47);
	var ps52 = new PlacedItemStack(1, 1);
	ps52.placeAt(1, 33);
	var ps53 = new PlacedItemStack(1, 1);
	ps53.placeAt(15, 36);
	var ps54 = new PlacedItemStack(1, 1);
	ps54.placeAt(11, 38);
	var ps55 = new PlacedItemStack(1, 1);
	ps55.placeAt(9, 41);
	var ps56 = new PlacedItemStack(1, 1);
	ps56.placeAt(4, 43);
	var ps57 = new PlacedItemStack(1, 1);
	ps57.placeAt(5, 44);
	var ps58 = new PlacedItemStack(1, 1);
	ps58.placeAt(8, 47);
	var ps59 = new PlacedItemStack(1, 1);
	ps59.placeAt(9, 17);
	var ps60 = new PlacedItemStack(1, 1);
	ps60.placeAt(15, 17);
	var ps61 = new PlacedItemStack(1, 1);
	ps61.placeAt(1, 19);
	var ps62 = new PlacedItemStack(1, 1);
	ps62.placeAt(11, 20);
	var ps63 = new PlacedItemStack(1, 1);
	ps63.placeAt(6, 23);
	var ps64 = new PlacedItemStack(1, 1);
	ps64.placeAt(10, 23);
	var ps65 = new PlacedItemStack(1, 1);
	ps65.placeAt(3, 25);
	var ps66 = new PlacedItemStack(1, 1);
	ps66.placeAt(7, 27);
	var ps67 = new PlacedItemStack(1, 1);
	ps67.placeAt(13, 29);
	var ps68 = new PlacedItemStack(1, 1);
	ps68.placeAt(3, 31);
	var ps69 = new PlacedItemStack(1, 1);
	ps69.placeAt(11, 31);
	var ps70 = new PlacedItemStack(1, 1);
	ps70.placeAt(17, 17);
	var ps71 = new PlacedItemStack(1, 1);
	ps71.placeAt(31, 17);
	var ps72 = new PlacedItemStack(1, 1);
	ps72.placeAt(31, 31);
	var ps73 = new PlacedItemStack(1, 1);
	ps73.placeAt(17, 31);

}
