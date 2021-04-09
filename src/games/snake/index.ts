import Food from "./src/food";
import TileMap from "./src/tileMap";
import Snake from "./src/snake";

class SnakeGame {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private isStartedAnimation: boolean = true;
	private lastUpdatedFrame: number = 0;
	private deltaTime: number = 0;
	private animationFrameLoop: number = 0;
	readonly sizeCanvas: number = 450;
	readonly square: number = 9;
	readonly frameDuration: number = 1000 / 60;

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

	private setDeltaTime(timestamp: number): void {
		const deltaTime = (timestamp - this.lastUpdatedFrame) / this.frameDuration;
		this.deltaTime = Math.round(deltaTime);
		this.lastUpdatedFrame = timestamp;
	}

	private frame(): void {
		this.animationFrameLoop = requestAnimationFrame((timestamp: number) => {
			this.setDeltaTime(timestamp);
			this.frame();
		});
	}

	public main(): void {
		requestAnimationFrame((timestamp: number) => {
			this.lastUpdatedFrame = timestamp;
			this.frame();
		});
	}

	public start(): void {
		if (!this.isStartedAnimation) {
			this.isStartedAnimation = true;
			this.frame();
		}
	}

	public pause(): void {
		this.isStartedAnimation = false;
		cancelAnimationFrame(this.animationFrameLoop);
	}
}

export default SnakeGame;
