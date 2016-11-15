var BULLET_SIZE = 5;
var BULLET_SPEED = 400;

class Bullet {
	constructor (owner, x, y, rotation) {
		this.owner = owner;
		this.x = x;
		this.y = y;
		this.rotation = rotation;
		this.sin = Math.sin(toRadians(this.rotation));
		this.cos = Math.cos(toRadians(this.rotation));
	}

	draw() {
		ctx.save();
    	ctx.translate(this.x + BULLET_SIZE / 2, this.y + BULLET_SIZE / 2);
		ctx.rotate(toRadians(this.rotation));
		ctx.drawImage(bulletImage, -BULLET_SIZE / 2, -BULLET_SIZE / 2, BULLET_SIZE, BULLET_SIZE);
		ctx.restore();
	}
	
	move(deltaTime) {
		//Get hypotenus of movement
		var movement = BULLET_SPEED * deltaTime;

		//Get movement amount on x and y
		var movementX = this.sin * movement;
		var movementY = this.cos * movement;
		
		//Move tank
		this.x += movementX;
		this.y -= movementY;
	}
	
	getCollisionRect() {
		return new CollisionRect(this.x, this.y, BULLET_SIZE, BULLET_SIZE);
	}
}