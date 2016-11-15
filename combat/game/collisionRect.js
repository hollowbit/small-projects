class CollisionRect {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	collidesWith(rect) {
		return this.x < rect.x + rect.width && this.x + this.width > rect.x && this.y < rect.y + rect.height && this.y + this.height > rect.y;
	}
	
	collidesWithWorld(map, thisTank, tanks) {
		//Check collision with world borders
		if (this.x < 0 || this.x + this.width > CANVAS_SIZE || this.y < 0 || this.y + this.height > CANVAS_SIZE) {
			return true;
		}
		
		//Check for collision with tanks
		if (tanks != null) {//Only check if tanks was passed
			for (var i = 0; i < tanks.length; i++) {
				if (tanks[i] == thisTank)//Don't check for collision if it is tank being tested
					continue;
				
				if (this.collidesWith(tanks[i].getCollisionRect()))
					return true;
			}
		}
		
		//Check collision with tiles on map
		for (var r = 0; r < map.data.length; r++) {//Loop through rows
			for (var c = 0; c < map.data[0].length; c++) {//Loop through columns
			
				if (!tiles[map.data[r][c]].collision)
					continue;
				
				if (this.collidesWith(new CollisionRect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE))) {
					return true;
				}
			}
		}
		
		//If this point is reached, there is no collision
		return false;
	}
}