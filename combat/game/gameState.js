var player1TankImage, player2TankImage, damagedTankImage, bulletImage;
var rotateRightP1 = false, rotateRightP2 = false, rotateLeftP1 = false, rotateLeftP2 = false, forwardP1 = false, forwardP2 = false, shootP1 = false, shootP2 = false;
var shootTimerP1 = 0, shootTimerP2 = 0;

var shiftPressed = false;

var showInstructions = true;

function GameState() {
	this.player1score = 0;
	this.player2score = 0;
	
	this.update = function(deltaTime) {
		//Get tanks
		var p1Tank = this.player1Tanks[this.player1Tank];
		var p2Tank = this.player2Tanks[this.player2Tank];
		
		var tanks = this.getAllTanks();

		//Handle rotation
		var p1Rotated = false;//Used to disable movement when rotating
		var p2Rotated = false;// ^
		if (rotateRightP1) {
			p1Tank.rotate(deltaTime);
			p1Rotated = true;
		}
		if (rotateLeftP1) {
			p1Tank.reverserotate(deltaTime);
			p1Rotated = true;
		}
		if (rotateRightP2) {
			p2Tank.rotate(deltaTime);
			p2Rotated = true;
		}
		if (rotateLeftP2) {
			p2Tank.reverserotate(deltaTime);
			p2Rotated = true;
		}

		//If stiff rotation is not on, act as if the tanks didn't rotate
		if (!stiffRotation) {
			p1Rotated = false;
			p2Rotated = false;
		}
		
		//Handle forward movement
		if (forwardP1 && !p1Rotated)
			p1Tank.move(this.map, tanks, deltaTime);

		if (forwardP2 && !p2Rotated)
			p2Tank.move(this.map, tanks, deltaTime);

		//Handle shooting
		shootTimerP1 += deltaTime;
		if (shootP1) {
			if (shootTimerP1 >= TIME_BETWEEN_SHOTS) {
				shootTimerP1 = 0;
				this.spawnBullet(p1Tank);
			}
		}

		shootTimerP2 += deltaTime;
		if (shootP2) {
			if (shootTimerP2 >= TIME_BETWEEN_SHOTS) {
				shootTimerP2 = 0;
				this.spawnBullet(p2Tank);
			}
		}

		//Update bullets
		var bulletsToRemove = new Array();//Use remove arrays to avoid concurrent modification errors
		for (var i = 0; i < this.bullets.length; i++) {
			this.bullets[i].move(deltaTime);
			
			//If the bullet collides with the world, remove it
			if (this.bullets[i].getCollisionRect().collidesWithWorld(this.map))
				bulletsToRemove.push(this.bullets[i]);
		}
		
		//Remove bullets
		for (var j = 0; j < bulletsToRemove.length; j++)
			this.bullets.splice(this.bullets.indexOf(bulletsToRemove[j]), 1);
		
		//Check for bullets/player collisions
		bulletsToRemove = new Array();
		for (var i = 0; i < this.bullets.length; i++) {
			var bullet = this.bullets[i];

			//Check with player1 tanks
			var p1TanksToRemove = new Array();
			for (var u = 0; u < this.player1Tanks.length; u++) {
				var tank = this.player1Tanks[u];

				//Don't damage the tank that shot it
				if (bullet.owner == tank)
					continue;

				//Check for collision
				if (bullet.getCollisionRect().collidesWith(tank.getFullCollisionRect())) {
					tank.health--;//Decrease player health
					tank.damaged = true;

					bulletsToRemove.push(this.bullets[i]);

					if (tank.health <= 0) {
						p1TanksToRemove.push(this.player1Tanks[u]);
						this.player2score++;
						deathSound.play();
					} else {
						damageSound.play();
					}
				}
			}
			
			//Remove tanks from player 1
			for (var j = 0; j < p1TanksToRemove.length; j++) {
				//If the currently selected tank is removed, change the selection
				if (j == this.player1Tanks[this.player1Tank]) {
					this.player1Tank++;
					if (this.player1Tank >= this.player1Tanks.length - 1)
						this.player1Tank = 0;
				}

				//Remove it
				this.player1Tanks.splice(this.player1Tanks.indexOf(p1TanksToRemove[j]), 1);
				
				//Make sure tank index is still in bounds
				while (this.player1Tank >= this.player1Tanks.length)
					this.player1Tank--;
			}

			//Check with player2 tanks
			var p2TanksToRemove = new Array();
			for (var u = 0; u < this.player2Tanks.length; u++) {
				var tank = this.player2Tanks[u];

				//Don't damage the tank that shot it
				if (bullet.owner == tank)
					continue;

				//Check for collision
				if (bullet.getCollisionRect().collidesWith(tank.getFullCollisionRect())) {
					tank.health--;//Decrease player health
					tank.damaged = true;//Set to damaged to display damaged tank image

					bulletsToRemove.push(this.bullets[i]);

					if (tank.health <= 0) {
						p2TanksToRemove.push(this.player2Tanks[u]);
						this.player1score++;
						deathSound.play();
					} else {
						damageSound.play();
					}
				}
			}

			//Remove tanks from player 2
			for (var j = 0; j < p2TanksToRemove.length; j++) {
				//If the currently selected tank is removed, change the selection
				if (j == this.player2Tanks[this.player2Tank]) {
					this.player2Tank++;
					if (this.player2Tank >= this.player2Tanks.length - 1)
						this.player2Tank = 0;
				}

				//Remove it
				this.player2Tanks.splice(this.player2Tanks.indexOf(p2TanksToRemove[j]), 1);
				
				//Make sure tank index is still in bounds
				while (this.player2Tank >= this.player2Tanks.length)
					this.player2Tank--;
			}

		}

		//Remove bullets
		for (var j = 0; j < bulletsToRemove.length; j++)
			this.bullets.splice(this.bullets.indexOf(bulletsToRemove[j]), 1);

		this.checkForGameover();//Check if there is a gameover
	};
	
	this.getAllTanks = function() {
		//Array for all tanks
		var tanks = new Array();
		
		//Add player 1 tanks
		for (var i = 0; i < this.player1Tanks.length; i++)
			tanks.push(this.player1Tanks[i]);
		
		//Add player 2 tanks
		for (var i = 0; i < this.player2Tanks.length; i++)
			tanks.push(this.player2Tanks[i]);
		
		return tanks;
	}
	
	this.getTankIndexById = function(tanks, id) {
		for (var i = 0; i < tanks.length; i++) {
			if (tanks[i].id == id)
				return i;
		}
		return -1;
	} 
	
	this.spawnBullet = function(tank) {
		//Spawn a new bullet at the center of the tank's location
		shootSound.play();
		this.bullets.push(new Bullet(tank, tank.getCenterX() - BULLET_SIZE / 2, tank.getCenterY() - BULLET_SIZE / 2, tank.rotation));
	}

	this.draw = function() {
		//Draw tilemap to the screen
		for (var r = 0; r < this.map.data.length; r++) {//Loop through rows
			for (var c = 0; c < this.map.data[0].length; c++)//Loop through columns
				ctx.drawImage(tiles[this.map.data[r][c]].image, c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);//Get the tile at map location and draw it
		}

		//Draw bullets
		for (var i = 0; i < this.bullets.length; i++)
			this.bullets[i].draw();

		//Draw tanks
		for (var i = 0; i < this.player1Tanks.length; i++) 
			this.player1Tanks[i].draw(player1TankImage);

		for (var i = 0; i < this.player2Tanks.length; i++)
			this.player2Tanks[i].draw(player2TankImage);

		//Handle gameover messages
		ctx.font="20px Courier New";
		ctx.textAlign="center";
		if (this.state == 1) {
			drawBorderedText("Player 1 Wins!", CANVAS_SIZE / 2, CANVAS_SIZE / 2);
		} else if (this.state == 2) {
			drawBorderedText("Player 2 Wins!", CANVAS_SIZE / 2, CANVAS_SIZE / 2);
		}

		//Print restart text if in a gameover state
		ctx.font="15px Courier New";
		if (this.state != 0) {
			drawBorderedText("Thanks for Playing!", CANVAS_SIZE / 2, 15);
			drawBorderedText("Press SHIFT-R to restart...", CANVAS_SIZE / 2, 30);
		}
		
		//Print instructions
		if (showInstructions) {
			drawBorderedText("COMBAT", CANVAS_SIZE / 2, 20);
			drawBorderedText("Hommage to the Atari 2600 version", CANVAS_SIZE / 2, 35);
			drawBorderedText("by Nathanael Maher", CANVAS_SIZE / 2, 50);
			drawBorderedText("Press ANY key to start!", CANVAS_SIZE / 2, 150);
			drawBorderedText("Instructions Below.", CANVAS_SIZE / 2, 200);
		}
		
		//Draw score for each player
		drawBorderedText(this.player2score, CANVAS_SIZE - 30, CANVAS_SIZE - 10);
		ctx.drawImage(player2TankImage, CANVAS_SIZE - 5 - TANK_SIZE, CANVAS_SIZE - 25, TANK_SIZE, TANK_SIZE);
		drawBorderedText(this.player1score, 30, CANVAS_SIZE - 10);
		ctx.drawImage(player1TankImage, 5, CANVAS_SIZE - 25, TANK_SIZE, TANK_SIZE);
	};

	//Checks to see if the game is over
	this.checkForGameover = function() {
		//Only check for gameover if no gameover already
		if (this.state == 0) {
			if (this.player2Tanks.length == 0)//If player 2 has no more tanks, player 1 wins.
				this.state = 1;
			else if (this.player1Tanks.length == 0)//If player 1 has no more tank, player 2 wins.
				this.state = 2;
		}
	};
	this.state = 0;//0 = In-Game, 1 = Player 1 won, 2 = Player 2 won
	this.loadGame = function() {
		this.state = 0;
		
		var mapSelect = $("#mapSelect").val();
		
		//If first option is selected, pick random map, otherwise use picked map
		if (mapSelect == 0)
			this.map = maps[Math.floor(Math.random() * maps.length)];//Pick a random map
		else
			this.map = maps[mapSelect - 1];
		
		$("#mapName").text("Map: " + this.map.name);
		
		//Index of selected tank
		this.player1Tank = 0;
		this.player2Tank = 0;
		
		//Add tanks for both players depending on how many are in map
		this.player1Tanks = new Array();
		this.player2Tanks = new Array();
		for (var i = 0; i < this.map.tanks; i++) {
			var tanks = this.getAllTanks();
			this.player1Tanks[i] = new Tank(this.map, tanks);
			this.player2Tanks[i] = new Tank(this.map, tanks);
		}

		//Create bullets array
		this.bullets = new Array();

		//Load tank images
		player1TankImage = new Image();
		player1TankImage.src = "images/player1_tank.png";

		player2TankImage = new Image();
		player2TankImage.src = "images/player2_tank.png";

		damagedTankImage = new Image();
		damagedTankImage.src = "images/damaged_tank.png";

		//Load bullet image
		bulletImage = new Image();
		bulletImage.src = "images/bullet.png";

		//Event handlers
		this.handleKeyDown = function(evt) {
			showInstructions = false;
			if (evt.which == 16)//Set shifted to true
				shiftPressed = true;

			if (evt.which == 82 && shiftPressed)//If shift and r is pressed, restart game
				this.loadGame();

			//Player 1 controls
			if (evt.which == 87) {//Forward
				forwardP1 = true;
				moveSound.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
				}, false);
				moveSound.play();
			} if (evt.which == 65)//Rotate left
				rotateLeftP1 = true;
			if (evt.which == 68)//Rotate right
				rotateRightP1 = true;
			if (evt.which == 32) {//Shoot
				shootP1 = true;
				if (shootTimerP1 >= TIME_BETWEEN_SHOTS) {
					shootTimerP1 = 0;
					this.spawnBullet(this.player1Tanks[this.player1Tank]);
				}
			}
			if (evt.which == 83) {//Switch
				this.player1Tank++;
				if (this.player1Tank >= this.player1Tanks.length)
					this.player1Tank = 0;
			}
			
			//Player 2 controls
			if (evt.which == 38) {//Forward
				forwardP2 = true;
				moveSound2.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
				}, false);
				moveSound2.play();
			} if (evt.which == 37)//Rotate left
				rotateLeftP2 = true;
			if (evt.which == 39)//Rotate right
				rotateRightP2 = true;
			if (evt.which == 13) {//Shoot
				shootP2 = true;
				if (shootTimerP2 >= TIME_BETWEEN_SHOTS) {
					shootTimerP2 = 0;
					this.spawnBullet(this.player2Tanks[this.player2Tank]);
				}
			}
			if (evt.which == 40) {//Switch
				this.player2Tank++;
				if (this.player2Tank >= this.player2Tanks.length)
					this.player2Tank = 0;
			}
		}

		this.handleKeyUp = function(evt) {
			if (evt.which == 16)
				shiftPressed = false;

			//Player 1 controls
			if (evt.which == 87) {
				forwardP1 = false;
				moveSound.pause();
			} if (evt.which == 65)
				rotateLeftP1 = false;
			if (evt.which == 68)
				rotateRightP1 = false;
			if (evt.which == 32)
				shootP1 = false;

			//Player 2 controls
			if (evt.which == 38) {
				forwardP2 = false;
				moveSound2.pause();
			} if (evt.which == 37)
				rotateLeftP2 = false;
			if (evt.which == 39)
				rotateRightP2 = false;
			if (evt.which == 13)
				shootP2 = false;
		}
	};

	this.player1Tank = 0;
	this.player2Tank = 0;

	this.loadGame();
}