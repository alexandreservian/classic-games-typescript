import DoublyLinkedList from "utils/doubly-linked-list";

enum DirectionX {
	default = 0,
	Right = 1,
	Left = -1,
}

enum DirectionY {
	default = 0,
	Down = 1,
	Up = -1,
}

type DetailsBody = {
	x: number;
	y: number;
};

class Snake {
	private context: CanvasRenderingContext2D;
	private canvasLayer: HTMLCanvasElement;
	private contextLayer: CanvasRenderingContext2D;
	private body: DoublyLinkedList<DetailsBody>;
	private square: number;
	private velocity: number = 1;
	private lastX: number;
	private lastY: number;
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
		this.lastX = initialX;
		this.lastY = initialY;
		this.body = this.createBody(initialX, initialY);
		this.drawBody(this.body);
	}

	private createBody(
		initialX: number,
		initialY: number
	): DoublyLinkedList<DetailsBody> {
		const xBase: number = initialX;
		const yBase: number = initialY;
		const doublyLinkedList = new DoublyLinkedList<DetailsBody>();
		doublyLinkedList.push({
			x: xBase,
			y: yBase,
		});
		doublyLinkedList.push({
			x: xBase - this.square,
			y: yBase,
		});
		doublyLinkedList.push({
			x: xBase - this.square * 2,
			y: yBase,
		});
		return doublyLinkedList;
	}

	private drawBody(body: DoublyLinkedList<DetailsBody>): void {
		body.forEach((element: DetailsBody) => {
			this.draw(element.x, element.y);
		});
	}

	private draw(x: number, y: number): void {
		this.contextLayer.fillRect(x, y, this.square, this.square);
		this.context.drawImage(
			this.canvasLayer,
			0,
			0,
			this.widthCanvas,
			this.heightCanvas
		);
	}

	private clear(x: number, y: number): void {
		this.contextLayer.clearRect(x, y, this.square, this.square);
	}

	public update(directionX: DirectionX, directionY: DirectionY): void {
		this.lastX = this.lastX + this.square * directionX;
		this.lastY = this.lastY + this.square * directionY;
		this.body.unshift({ x: this.lastX, y: this.lastY });
		const lastBodyPart = this.body.pop() as DetailsBody;

		this.clear(lastBodyPart.x, lastBodyPart.y);
		this.draw(this.lastX, this.lastY);
	}
}

export default Snake;
