enum TileTypes {
	Empty,
	Food,
	Body,
}

class Snake {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	readonly sizeCanvas: number = 450;
	readonly square: number = 9;
	private tile: Array<Array<number>> = [];

	constructor() {
		const size: string = this.sizeCanvas.toString();
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
		this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

		this.canvas.setAttribute("width", size);
		this.canvas.setAttribute("height", size);
		this.tileMap();
		this.setBackground();
		this.drawFood(49, 49);
	}

	private tileMap(): void {
		const blocks: number = Math.trunc(Math.abs(this.sizeCanvas / this.square));
		for (let y = 0; y < blocks; y++) {
			this.tile[y] = [];
			for (let x = 0; x < blocks; x++) {
				this.tile[y][x] = TileTypes.Empty;
			}
		}
	}

	private setBackground(): void {
		this.context.fillStyle = "#b1c000";
		this.context.fillRect(0, 0, this.sizeCanvas, this.sizeCanvas);
	}

	private drawFood(xAxis: number, yAxis: number): void {
		const sizeBlockFood: number = 3;
		const absoluteXaxis = this.square * xAxis;
		const absoluteYaxis = this.square * yAxis;
		this.context.fillStyle = "#000";
		this.context.fillRect(
			absoluteXaxis + 3,
			absoluteYaxis + 0,
			sizeBlockFood,
			sizeBlockFood
		);
		this.context.fillRect(
			absoluteXaxis,
			absoluteYaxis + 3,
			sizeBlockFood,
			sizeBlockFood
		);
		this.context.fillRect(
			absoluteXaxis + 6,
			absoluteYaxis + 3,
			sizeBlockFood,
			sizeBlockFood
		);
		this.context.fillRect(
			absoluteXaxis + 3,
			absoluteYaxis + 6,
			sizeBlockFood,
			sizeBlockFood
		);
	}
}

export default Snake;
