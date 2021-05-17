import Engine from "engine";
import Food from "./src/food";
import Snake from "./src/snake";

class SnakeGame extends Engine {
	private snake: Snake;
	private readonly square: number = 3;

	constructor() {
		super();
		const centerScreen = this.sizeCanvas / 2 - this.square;
		new Food(this.context, 35, 23, this.square);
		this.snake = new Snake(
			this.context,
			centerScreen,
			centerScreen,
			this.square,
			450,
			450,
			450,
			450
		);
	}

	private setBackground(): void {
		this.context.fillStyle = "#b1c000";
		this.context.fillRect(0, 0, this.sizeCanvas, this.sizeCanvas);
	}

	protected update(): void {
		this.setBackground();
		this.snake.update(1, 0);
	}
}

export default SnakeGame;
