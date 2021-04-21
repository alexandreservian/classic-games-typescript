class Food {
	private context: CanvasRenderingContext2D;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		square: number
	) {
		this.context = context;

		const positions: Array<Array<number>> = this.createPositions(x, y, square);
		this.draw(positions, square);
	}

	private createPositions(
		x: number,
		y: number,
		square: number
	): Array<Array<number>> {
		const absoluteX = square * x;
		const absoluteY = square * y;

		return [
			[absoluteX + 3, absoluteY + 0],
			[absoluteX, absoluteY + 3],
			[absoluteX + 6, absoluteY + 3],
			[absoluteX + 3, absoluteY + 6],
		];
	}

	private draw(positions: Array<Array<number>>, square: number): void {
		const lenPositions: number = positions.length;
		this.context.fillStyle = "#000";

		for (let y = 0; y < lenPositions; y++) {
			this.context.fillRect(positions[y][0], positions[y][1], square, square);
		}
	}
}

export default Food;
