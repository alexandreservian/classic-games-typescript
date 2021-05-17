class MeterFps {
	private context: CanvasRenderingContext2D;
	private canvasLayer: HTMLCanvasElement;
	private contextLayer: CanvasRenderingContext2D;
	private widthCanvas: number;
	private heightCanvas: number;
	private widthLayer: number;
	private heightLayer: number;

	constructor(
		context: CanvasRenderingContext2D,
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
		this.contextLayer.font = "10px sans-serif";
		this.contextLayer.textBaseline = "hanging";
	}

	public draw(fps: number = 0, time: number = 0): void {
		this.contextLayer.clearRect(0, 0, this.widthLayer, this.heightLayer);
		this.contextLayer.fillStyle = "black";
		this.contextLayer.fillText(`FPS: ${fps} Time: ${time}`, 3, 3);
		this.context.drawImage(
			this.canvasLayer,
			0,
			0,
			this.widthCanvas,
			this.heightCanvas
		);
	}
}

export default MeterFps;
