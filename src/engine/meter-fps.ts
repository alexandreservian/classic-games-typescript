class MeterFps {
  private context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.context.font = "10px sans-serif";
    this.context.textBaseline = "hanging";
  }

  public draw(fps: number = 0, time: number = 0): void {
    this.context.fillStyle = "black";
    this.context.fillText(`FPS: ${fps} Time: ${time}`, 3, 3);
  }
}

export default MeterFps;
