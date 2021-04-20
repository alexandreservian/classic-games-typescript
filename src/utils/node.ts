class Node<T> {
	constructor(
		private element: T,
		private prev?: Node<T>,
		private next?: Node<T>
	) {}

	public setNext(next: Node<T> | undefined): void {
		this.next = next;
	}

	public setPrev(prev: Node<T> | undefined): void {
		this.prev = prev;
	}

	public getNext(): Node<T> | undefined {
		return this.next;
	}

	public getPrev(): Node<T> | undefined {
		return this.prev;
	}

	public getElement(): T {
		return this.element;
	}
}

export default Node;
