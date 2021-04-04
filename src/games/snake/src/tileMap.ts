enum TileTypes {
	Empty,
	Food,
	Body,
}

class TileMap {
	private map: Array<Array<number>> = [];

	constructor(sizeCanvas: number, square: number) {
		this.createMap(sizeCanvas, square);
	}

	private createMap(sizeCanvas: number, square: number): void {
		const blocks: number = Math.trunc(Math.abs(sizeCanvas / square));
		for (let y = 0; y < blocks; y++) {
			this.map[y] = [];
			for (let x = 0; x < blocks; x++) {
				this.map[y][x] = TileTypes.Empty;
			}
		}
	}
}

export default TileMap;
