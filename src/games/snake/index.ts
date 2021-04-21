import Engine from "engine";
import Food from "./src/food";
import Snake from "./src/snake";

class SnakeGame extends Engine {
	private snake: Snake;
	private readonly square: number = 3;

	constructor() {
		super();
		this.setBackground();
		new Food(this.context, 35, 23, this.square);
		this.snake = new Snake(this.context, 18, 24, this.square);
	}

	private setBackground(): void {
		this.context.fillStyle = "#b1c000";
		this.context.fillRect(0, 0, this.sizeCanvas, this.sizeCanvas);
	}

	protected update(): void {}
}

export default SnakeGame;
