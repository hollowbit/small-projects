var TANK_SIZE = 16;
var TANK_IMAGE_SIZE = 30;
var TANK_SPEED = 70;
var TANK_ROTATE_SPEED = 80;
var TIME_BETWEEN_SHOTS = 0.8;//Time between shots in seconds

//Tank constructor
class Tank {
	
	constructor(map, tanks) {
		//Place tank in a random location
		this.x = Math.random() * (CANVAS_SIZE - TANK_SIZE);//Chose a random x location from 0 to the screen width - the tank size so the tank is completely on screen
		this.y = Math.random() * (CANVAS_SIZE - TANK_SIZE);//Same as x, but for y
	
		//Continue generating coordinates until a valid position is found that doesn't collide with any tiles
		while ((new CollisionRect(this.x + (TANK_IMAGE_SIZE - TANK_SIZE) / 2, this.y + (TANK_IMAGE_SIZE - TANK_SIZE) / 2, TANK_SIZE, TANK_SIZE)).collidesWithWorld(map, this, tanks)) {
			this.x = Math.random() * (CANVAS_SIZE - TANK_SIZE);
			this.y = Math.random() * (CANVAS_SIZE - TANK_SIZE);
		}
	
		this.health = 3;
		this.rotation = Math.random() * 360;
		this.updateRotation();
		this.damaged = false;//Used to show that this tank was hit
	}
	
	draw(image) {
		if (this.damaged)
			image = damagedTankImage;

		ctx.save();
    	ctx.translate(this.x + TANK_IMAGE_SIZE / 2, this.y + TANK_IMAGE_SIZE / 2);
		ctx.rotate(toRadians(this.rotation));
		ctx.drawImage(image, -TANK_IMAGE_SIZE / 2, -TANK_IMAGE_SIZE / 2, TANK_IMAGE_SIZE, TANK_IMAGE_SIZE);
		ctx.restore();

		this.damaged = false;
	}
	
	updateRotation() {
		this.sin = Math.sin(toRadians(this.rotation));
		this.cos = Math.cos(toRadians(this.rotation));
	}
	
	rotate(deltaTime) {
		this.rotation += TANK_ROTATE_SPEED * deltaTime;
		if (this.rotation > 360)
			this.rotatation = 0;
		
		this.updateRotation();
	};
	
	reverserotate(deltaTime) {
		this.rotation -= TANK_ROTATE_SPEED * deltaTime;
		if (this.rotation < 0)
			this.rotation = 360;
		
		this.updateRotation();
	}
	
	
	
	move(map, tanks, deltaTime) {
		//Get hypotenus of movement
		var movement = TANK_SPEED * deltaTime * this.getTileUnder(map).speedMultiplier;

		//Get movement amount on x and y
		var movementX = this.sin * movement;
		var movementY = this.cos * movement;
		
		//Only move tank if it doesn't collide with world
		if (!(new CollisionRect(this.x + (TANK_IMAGE_SIZE - TANK_SIZE) / 2 + movementX, this.y + (TANK_IMAGE_SIZE - TANK_SIZE) / 2 - movementY, TANK_SIZE, TANK_SIZE)).collidesWithWorld(map, this, tanks)) {
			this.x += movementX;
			this.y -= movementY;
		}
	}
	
	getCenterX() {
		return this.x + TANK_IMAGE_SIZE / 2;
	}
	
	getCenterY() {
		return this.y + TANK_IMAGE_SIZE / 2;
	}
	
	getTileUnder(map) {//Returns the tile this tank is currently on
		return tiles[map.data[Math.floor(this.getCenterY() / TILE_SIZE)][Math.floor(this.getCenterX() / TILE_SIZE)]];
	}
	
	getCollisionRect() {
		//Add (TANK_IMAGE_SIZE - TANK_SIZE) / 2 to add an offset so the collision rect is centered on the tank
		return new CollisionRect(this.x + (TANK_IMAGE_SIZE - TANK_SIZE) / 2, this.y + (TANK_IMAGE_SIZE - TANK_SIZE) / 2, TANK_SIZE, TANK_SIZE);
	}
	
	getFullCollisionRect() {
		return new CollisionRect(this.x, this.y, TANK_IMAGE_SIZE, TANK_IMAGE_SIZE);
	}
}