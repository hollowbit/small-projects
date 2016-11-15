//General variables
var canvas
var ctx;
var CANVAS_SIZE;
var MAP_SIZE = 20;
var TILE_SIZE;
var FPS = 60;
var MS = 1000 / FPS;

//Game variables
var tiles = new Array();
var maps = new Array();
var gameState;
var startTime = 0;
var stiffRotation = true;//Enable/disable in gameData.js. true = tanks cannot move and rotate, false = tanks can move and rotate at same time

//Sounds
var deathSound, shootSound, damageSound, moveSound, moveSound2;//2 move sounds, 1 for each player's tank

$(document).ready(function() {
	canvas = $("#gameCanvas")[0];
	
	$("#gameCanvas")
    // Add tab index to ensure the canvas retains focus
    .attr("tabindex", "0");/*
    // Mouse down override to prevent default browser controls from appearing
    .mousedown(function(){ $(this).focus(); return false; }) 
    .keydown(function(){ /* ... game logic ... */ /*return false; });*/
	
	ctx = canvas.getContext("2d");

	//Removes image filtering when they are scalled, so they keep their pixelated look
	ctx.mozImageSmoothingEnabled = false;
    ctx.ImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

	CANVAS_SIZE = canvas.width;
	TILE_SIZE = CANVAS_SIZE / MAP_SIZE;

	loadGameData();

	gameState = new GameState();

	//Set start time
	startTime = new Date().getTime();
	setInterval(function() {
		//Delta time is a float which represents the time passed (in seconds) since the last time this function was called
		var deltaTime = (new Date().getTime() - startTime) / 1000.0;
		startTime = new Date().getTime();//Reset startTime

		gameState.update(deltaTime);//Update game state passing delta time

		//Clear canvas and draw
		ctx.fillStyle="white";
		ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
		gameState.draw();
	}, MS);

	//Load eventhandlers
	$(document).keydown(function(evt) {
		gameState.handleKeyDown(evt);
		evt.preventDefault();
	});

	$(document).keyup(function(evt) {
		gameState.handleKeyUp(evt);
		evt.preventDefault();
	});
	
	//Reset game if setting was changed
	$("#stiffRotation").change(function() {
		stiffRotation = document.getElementById('stiffRotation').checked;
	});
	$("#resetGame").click(function() {
		gameState.loadGame();
	});
});

function loadGameData() {
	//Open json file and pass a function to be called asynchronisely once it is loaded
	var json = JSON.parse(gameData);
	
	//Load tiles
	var tilesJson = json['tiles'];
	for (var i = 0; i < tilesJson.length; i++) {
		var id = tilesJson[i]['id'];
		tiles[id] = new Object();
		var tile = tiles[id];

		tile.id = tilesJson[i]['id'];
		tile.image = new Image();
		tile.image.src = "images/tiles/" + tilesJson[i]['imgName'];
		tile.collision = tilesJson[i]['collision'];
		tile.speedMultiplier = tilesJson[i]['speedMultiplier'];
		//Add draw function to tiles
		tile.draw = function(x, y) {
			ctx.drawImage(this.image, x, y, TILE_SIZE, TILE_SIZE);//Get the tile at map location and draw it
		}
	}

	//Load maps
	var mapsJson = json['maps'];
	for (var i = 0; i < mapsJson.length; i++) {
		var map = new Object();
		map.name = mapsJson[i]['name'];
		map.data = mapsJson[i]['data'];
		map.tanks = mapsJson[i]['tanks'];

		maps.push(map);
	}
	
	//Load maps into selection list
	var mapSelect = $('#mapSelect');
	mapSelect.append(
		$('<option></option>').val(0).html("Random")
	);
	for (var i = 0; i < maps.length; i++) {
		mapSelect.append(
			$('<option></option>').val(i + 1).html(maps[i].name)
		);
	}
	
	//Load sounds  deathSound, shootSound, damageSound, moveSound
	deathSound = new Audio('sounds/death.mp3');
	shootSound = new Audio('sounds/shoot.mp3');
	damageSound = new Audio('sounds/damage.mp3');
	moveSound = new Audio('sounds/move.mp3');
	moveSound2 = new Audio('sounds/move.mp3');
	
	console.log("Loaded!");
}

function drawBorderedText(text, x, y) {
	ctx.strokeStyle = "Black";
	ctx.lineWidth = 4;
	ctx.strokeText(text, x, y);

	ctx.fillStyle = "White";
	ctx.fillText(text, x, y);

	ctx.fill();
	ctx.stroke();
}

function toRadians(degrees) {
	return degrees * (Math.PI / 180);
}