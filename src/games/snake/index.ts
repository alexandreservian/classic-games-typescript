import Engine from "engine";
import Food from "./src/food";
import Snake from "./src/snake";

enum DirectionX {
	Default = 0,
	Right = 1,
	Left = -1,
}

enum DirectionY {
	Default = 0,
	Down = 1,
	Up = -1,
}

enum Level {
	Easy = 1,
	Medium = 3,
	Hard = 5,
}

type CurrentDirection = {
	x: number;
	y: number;
};

class SnakeGame extends Engine {
	private snake: Snake;
	private readonly square: number = 3;
	private currentDirection: CurrentDirection;

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
		this.currentDirection = { x: DirectionX.Default, y: DirectionY.Up };
		this.controlSnake();
	}

	private setBackground(): void {
		this.context.fillStyle = "#b1c000";
		this.context.fillRect(0, 0, this.sizeCanvas, this.sizeCanvas);
	}

	protected update(): void {
		const velocity = this.deltaTime * Level.Easy;
		this.setBackground();
		this.snake.update(
			this.currentDirection.x,
			this.currentDirection.y,
			velocity
		);
	}

	private controlKeys = (events: KeyboardEvent): void => {
		const { key } = events;
		if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(key)) {
			events.preventDefault();
		}
		switch (key) {
			case "ArrowLeft":
				this.currentDirection = { x: DirectionX.Left, y: DirectionY.Default };
				break;
			case "ArrowRight":
				this.currentDirection = { x: DirectionX.Right, y: DirectionY.Default };
				break;
			case "ArrowUp":
				this.currentDirection = { x: DirectionX.Default, y: DirectionY.Up };
				break;
			case "ArrowDown":
				this.currentDirection = { x: DirectionX.Default, y: DirectionY.Down };
				break;
		}

		console.log(this.currentDirection);
	};

	private controlSnake(): void {
		document.addEventListener("keydown", this.controlKeys, false);
	}
}

export default SnakeGame;
