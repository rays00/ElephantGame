function Elephant(windowWidth, windowHeight){

	var texture = new PIXI.Texture.fromImage("images/elephant.png");
	var sprite = new PIXI.Sprite(texture);
	sprite.scale.x = 0.6;
	sprite.scale.y = 0.6;

	var currentPos = windowHeight / 2;
	sprite.y = currentPos;
	var jumpingTime = 0.5;
	var jumpingDistance = 100;

	var jumpingBlocked = false;


	this.getSprite = function(){
		return sprite;
	}

	this.jump = function(e){
		if(e.keyCode == 38 && !jumpingBlocked){
			jumpingBlocked = true;
			TweenLite.to(sprite, jumpingTime, {x:sprite.x, y:sprite.y - jumpingDistance, onComplete: land, ease:Power0.easeNone});
		}
	}

	function land(){
		TweenLite.to(sprite, jumpingTime, {x:sprite.x, y:sprite.y + jumpingDistance, onComplete: unBlockJumping, ease:Power0.easeNone});
	}

	function unBlockJumping(){
		jumpingBlocked = false;
	}

}