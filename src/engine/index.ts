import MeterFps from "./meter-fps";

abstract class Engine {
	private isStartedAnimation: boolean = true;
	private lastUpdatedFrame: number = 0;
	private frameRate: number = 0;
	private animationFrameLoop: number = 0;
	private meterFps: MeterFps;
	private rangeTimer: number = 0;
	private lastFps: number = 0;
	private lastFrameRate: number = 0;
	private canvas: HTMLCanvasElement;
	protected context: CanvasRenderingContext2D;
	protected deltaTime: number = 0;
	protected readonly sizeCanvas: number = 450;
	private readonly frameDuration: number = 1000 / 60;

	constructor() {
		const size: string = this.sizeCanvas.toString();
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
		this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvas.setAttribute("width", size);
		this.canvas.setAttribute("height", size);

		this.meterFps = new MeterFps(
			this.context,
			this.sizeCanvas,
			this.sizeCanvas,
			this.sizeCanvas,
			this.sizeCanvas
		);
	}

	private setDeltaTime(timestamp: number): void {
		this.frameRate = timestamp - this.lastUpdatedFrame;
		this.deltaTime = Math.round(this.frameRate / this.frameDuration);
		this.lastUpdatedFrame = timestamp;
	}

	private updateMeterFps(): void {
		if (this.rangeTimer > 250) {
			this.lastFps = Math.trunc(1000 / this.frameRate);
			this.lastFrameRate = parseFloat(this.frameRate.toFixed(2));
			this.rangeTimer = 0;
		} else {
			this.rangeTimer += this.frameRate;
		}
		this.meterFps.draw(this.lastFps, this.lastFrameRate);
	}

	private frame(): void {
		this.update();
		this.updateMeterFps();
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

	protected abstract update(): void;

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

export default Engine;
