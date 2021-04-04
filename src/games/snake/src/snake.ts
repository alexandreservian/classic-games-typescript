enum Direction {
	Up,
	Down,
	Left,
	Right,
}

type DetailsBody = {
	xAxis: number;
	yAxis: number;
	direction: Direction;
};

class Snake {
	private context: CanvasRenderingContext2D;
	private body: Array<DetailsBody>;
	private square: number;

	constructor(
		context: CanvasRenderingContext2D,
		initialXaxis: number,
		initialYaxis: number,
		square: number
	) {
		this.context = context;
		this.square = square;
		this.body = this.createBody(initialXaxis, initialYaxis);
		this.draw(this.body);
	}

	private createBody(
		initialXaxis: number,
		initialYaxis: number
	): Array<DetailsBody> {
		const xAxisBase: number = this.square * initialXaxis;
		const yAxisBase: number = this.square * initialYaxis;
		return [
			{
				xAxis: xAxisBase,
				yAxis: yAxisBase,
				direction: Direction.Left,
			},
			{
				xAxis: xAxisBase - this.square,
				yAxis: yAxisBase,
				direction: Direction.Left,
			},
			{
				xAxis: xAxisBase - this.square * 2,
				yAxis: yAxisBase,
				direction: Direction.Left,
			},
		];
	}

	private draw(body: Array<DetailsBody>) {
		const lenBody = body.length;
		this.context.fillStyle = "#000";
		for (let y = 0; y < lenBody; y++) {
			this.context.fillRect(
				body[y].xAxis,
				body[y].yAxis,
				this.square,
				this.square
			);
		}
	}
}

export default Snake;
