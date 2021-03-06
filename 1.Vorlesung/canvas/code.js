function initialize(){
	const canvas = document.getElementById("graphics");
	const ctx = canvas.getContext("2d");
	
	ctx.fillStyle = '#FFFF00';
	ctx.fillRect(50, 100, 380, 400);
	ctx.fillStyle = "rgba(0, 0, 124, 0.8";
	ctx.fillRect(25, 50, 70, 190);

	class Square{
		constructor(x, y, width) {
			this.x = x;
			this.y = y;
			this.width = width;
		}
		draw(context){
			context.fillRect(this.x, this.y, this.width, this.width);
		}
	}

	let square = new Square(10, 10 , 30);
	square.draw(ctx);

	class ColoredSquare extends Square{
		constructor(x, y, width, color) {
			super(x, y, width);
			this.fillStyle = color;
		}
		draw(context) {
			context.fillStyle = this.fillStyle;
			super.draw(context);
		}
	}
	let coloredSquare = new ColoredSquare(10, 20, 50, "rgba(0, 255, 122, 0.4)");
	coloredSquare.draw(ctx);

	//mousemove EventListener
	function onMouseMove(e) {
		const x = e.pageX;
		const y = e.pageY;
		coloredSquare.fillStyle = "#FFFFFF";
		coloredSquare.draw(ctx)
		coloredSquare.x = x-35;
		coloredSquare.y = y-35;
		coloredSquare.fillStyle = "rgba(0, 255, 122, 0.4)";
		coloredSquare.draw(ctx);
	}



	function onMouseDown(e) {
		e.currentTarget.addEventListener("mousemove", onMouseMove)
	
	}
	
	function onMouseUp(e) {
		container.removeEventListener("mousemove", onMouseMove);
	}

	const container = document.getElementById("container");
	container.addEventListener("mousedown", onMouseDown);
	container.addEventListener("mouseup", onMouseUp);

}	







