import DoublyLinkedList from "utils/doubly-linked-list";

enum Direction {
	Up,
	Down,
	Left,
	Right,
}

type DetailsBody = {
	x: number;
	y: number;
};

class Snake {
	private context: CanvasRenderingContext2D;
	private body: DoublyLinkedList<DetailsBody>;
	private square: number;

	constructor(
		context: CanvasRenderingContext2D,
		initialX: number,
		initialY: number,
		square: number
	) {
		this.context = context;
		this.square = Math.pow(square, 2);
		this.body = this.createBody(initialX, initialY);
		this.draw(this.body);
	}

	private createBody(
		initialX: number,
		initialY: number
	): DoublyLinkedList<DetailsBody> {
		const xBase: number = this.square * initialX;
		const yBase: number = this.square * initialY;
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

	private draw(body: DoublyLinkedList<DetailsBody>) {
		body.forEach((element: DetailsBody) => {
			this.context.fillRect(element.x, element.y, this.square, this.square);
		});
	}
}

export default Snake;
