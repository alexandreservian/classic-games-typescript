import Food from "./src/food";
import TileMap from "./src/tileMap";
import Snake from "./src/snake";

class SnakeGame {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	readonly sizeCanvas: number = 450;
	readonly square: number = 9;

	constructor() {
		const size: string = this.sizeCanvas.toString();
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
		this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

		this.canvas.setAttribute("width", size);
		this.canvas.setAttribute("height", size);
		this.setBackground();
		new TileMap(this.sizeCanvas, this.square);
		new Food(this.context, 35, 23, this.square);
		new Snake(this.context, 18, 24, this.square);
	}

	private setBackground(): void {
		this.context.fillStyle = "#b1c000";
		this.context.fillRect(0, 0, this.sizeCanvas, this.sizeCanvas);
	}
}

export default SnakeGame;
