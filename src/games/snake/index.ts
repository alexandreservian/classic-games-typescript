import Engine from "engine";
import Food from "./src/food";
import TileMap from "./src/tileMap";
import Snake from "./src/snake";

class SnakeGame extends Engine {
	private readonly square: number = 9;

	constructor() {
		super();
		this.setBackground();
		new TileMap(this.sizeCanvas, this.square);
		new Food(this.context, 35, 23, this.square);
		new Snake(this.context, 18, 24, this.square);
	}

	private setBackground(): void {
		this.context.fillStyle = "#b1c000";
		this.context.fillRect(0, 0, this.sizeCanvas, this.sizeCanvas);
	}

	protected update(): void {}
}

export default SnakeGame;
