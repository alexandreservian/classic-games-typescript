class Food {
	private context: CanvasRenderingContext2D;

	constructor(
		context: CanvasRenderingContext2D,
		xAxis: number,
		yAxis: number,
		square: number
	) {
		this.context = context;

		const positions: Array<Array<number>> = this.createPositions(
			xAxis,
			yAxis,
			square
		);
		this.draw(positions);
	}

	private createPositions(
		xAxis: number,
		yAxis: number,
		square: number
	): Array<Array<number>> {
		const absoluteXaxis = square * xAxis;
		const absoluteYaxis = square * yAxis;

		return [
			[absoluteXaxis + 3, absoluteYaxis + 0],
			[absoluteXaxis, absoluteYaxis + 3],
			[absoluteXaxis + 6, absoluteYaxis + 3],
			[absoluteXaxis + 3, absoluteYaxis + 6],
		];
	}

	private draw(positions: Array<Array<number>>): void {
		const lenPositions: number = positions.length;
		const sizeBlockFood: number = 3;
		this.context.fillStyle = "#000";

		for (let y = 0; y < lenPositions; y++) {
			this.context.fillRect(
				positions[y][0],
				positions[y][1],
				sizeBlockFood,
				sizeBlockFood
			);
		}
	}
}

export default Food;
