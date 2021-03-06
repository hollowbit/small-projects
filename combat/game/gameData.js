var gameData = '{' +
	'"tiles":[' +
		'{"id":0, "imgName":"grass.png", "collision":false, "speedMultiplier":1},' +
		'{"id":1, "imgName":"road.png", "collision":false, "speedMultiplier":1.5},' +
		'{"id":2, "imgName":"wall.png", "collision":true, "speedMultiplier":0.5},' +
		'{"id":3, "imgName":"bush.png", "collision":false, "speedMultiplier":0.5}' +
	'],' +
	'"maps":[' +
		'{' +
		'"name": "Classic",' +
		'"tanks": 2,' +
		'"data": [' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],' +
		'[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 0, 3, 0, 0, 3, 3, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],' +
		'[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]' +
		'},' +
		'{' +
		'"name": "Abandonned",' +
		'"tanks": 3,' +
		'"data": [' +
		'[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 0, 0, 2, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 3, 3, 0, 0, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 2, 2, 0, 2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],' +
		'[0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],' +
		'[0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 2, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 3, 3, 0, 0, 0],' +
		'[0, 0, 2, 0, 0, 2, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 2, 0, 0, 3, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]' +
		'},' +
		'{' +
		'"name": "Bases",' +
		'"tanks": 1,' +
		'"data": [' +
		'[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 3, 0, 3, 3, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]' +
		'},' +
		'{' +
		'"name": "Smiley",' +
		'"tanks": 2,' +
		'"data": [' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]]' +
		'},' +
		'{' +
		'"name": "Maze",' +
		'"tanks": 2,' +
		'"data": [' +
		'[0, 0, 2, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0],' +
		'[0, 0, 2, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 3, 3, 0, 0, 0, 0, 0],' +
		'[0, 0, 2, 1, 1, 2, 2, 2, 2, 0, 0, 2, 3, 3, 2, 2, 2, 2, 0, 0],' +
		'[0, 0, 2, 1, 1, 0, 0, 0, 2, 0, 0, 2, 3, 0, 2, 0, 0, 2, 0, 0],' +
		'[0, 0, 2, 1, 1, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],' +
		'[0, 0, 2, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],' +
		'[0, 3, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],' +
		'[3, 3, 3, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],' +
		'[0, 3, 3, 3, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],' +
		'[0, 0, 2, 3, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],' +
		'[0, 0, 2, 0, 0, 2, 0, 3, 3, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],' +
		'[0, 0, 2, 0, 0, 2, 0, 0, 3, 3, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],' +
		'[0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 0, 0],' +
		'[0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1, 1, 2, 0, 3, 3, 0, 0],' +
		'[0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1, 1, 2, 0, 3, 3, 3, 0],' +
		'[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 2, 3, 3],' +
		'[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 2, 0, 3],' +
		'[0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 1, 2, 0, 0, 2, 3, 0],' +
		'[1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 3],' +
		'[1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0]]' +
		'}' +
	']' +
'}';


/////Create your own map!//////
//Blank map:
/*
		'{' +
		'"name": "Blank",' +
		'"tanks": 1,' +
		'"data": [' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],' +
		'[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]' +
		'}' +
		*/