class Snake {
	private context: CanvasRenderingContext2D;
	private canvasLayer: HTMLCanvasElement;
	private contextLayer: CanvasRenderingContext2D;
	private square: number;
	private headX: number;
	private headY: number;
	private tailX: number;
	private tailY: number;
	private widthCanvas: number;
	private heightCanvas: number;
	private widthLayer: number;
	private heightLayer: number;

	constructor(
		context: CanvasRenderingContext2D,
		initialX: number,
		initialY: number,
		square: number,
		widthCanvas: number,
		heightCanvas: number,
		widthLayer: number,
		heightLayer: number
	) {
		this.canvasLayer = document.createElement("canvas") as HTMLCanvasElement;
		this.canvasLayer.setAttribute("width", widthLayer.toString());
		this.canvasLayer.setAttribute("height", heightLayer.toString());
		this.contextLayer = this.canvasLayer.getContext(
			"2d"
		) as CanvasRenderingContext2D;
		this.widthCanvas = widthCanvas;
		this.heightCanvas = heightCanvas;
		this.widthLayer = widthLayer;
		this.heightLayer = heightLayer;
		this.context = context;
		this.square = Math.pow(square, 2);
		this.headX = initialX + this.square * 3;
		this.headY = initialY + this.square * 3;
		this.tailX = initialX;
		this.tailY = initialY;
		this.drawBody(initialX, initialY, this.square * 3);
	}

	private drawBody(initialX: number, initialY: number, width: number): void {
		this.draw(initialX, initialY, width);
	}

	private draw(x: number, y: number, width: number): void {
		this.contextLayer.fillRect(x, y, width, this.square);
		this.context.drawImage(
			this.canvasLayer,
			0,
			0,
			this.widthCanvas,
			this.heightCanvas
		);
	}

	private clear(x: number, y: number, width: number): void {
		this.contextLayer.clearRect(x, y, width, this.square);
	}

	public update(
		directionX: number,
		directionY: number,
		velocity: number
	): void {
		const headX = this.headX;
		const headY = this.headY;
		const tailX = this.tailX;
		this.headX = this.headX + velocity * directionX;
		this.headY = this.headY + velocity * directionY;
		this.tailX = this.tailX + velocity * directionX;

		this.clear(tailX, headY, velocity);
		this.draw(headX, headY, velocity);
	}
}

export default Snake;
