import Node from "./node";

class DoublyLinkedList<T> {
	private length: number = 0;
	private head: Node<T> | undefined;
	private tail: Node<T> | undefined;

	private initList(element: T): void {
		const node = new Node<T>(element);
		this.head = node;
		this.tail = node;
	}

	public push(element: T): void {
		if (this.tail) {
			const node = new Node<T>(element, this.tail);
			this.tail.setNext(node);
			this.tail = node;
		} else {
			this.initList(element);
		}

		this.length++;
	}

	public pop(): T | undefined {
		if (!(this.tail && this.head)) {
			return undefined;
		}
		if (this.size() === 1) {
			this.head = undefined;
			this.tail = undefined;
			this.length = 0;
			return undefined;
		}
		const currentElement: T = this.tail.getElement();
		const prevNode = this.tail.getPrev() as Node<T>;
		this.tail = prevNode;
		this.tail.setNext(undefined);
		this.length--;

		return currentElement;
	}

	public unshift(element: T): void {
		if (this.head) {
			const node = new Node<T>(element, undefined, this.head);
			this.head.setPrev(node);
			this.head = node;
		} else {
			this.initList(element);
		}

		this.length++;
	}

	public shift(): T | undefined {
		if (!(this.tail && this.head)) {
			return undefined;
		}
		if (this.size() === 1) {
			this.head = undefined;
			this.tail = undefined;
			this.length = 0;
			return undefined;
		}
		const currentElement: T = this.head.getElement();
		const nextNode = this.head.getNext() as Node<T>;
		this.head = nextNode;
		this.head.setPrev(undefined);
		this.length--;

		return currentElement;
	}

	public getHead(): Node<T> | undefined {
		return this.head;
	}

	public getTail(): Node<T> | undefined {
		return this.tail;
	}

	public size(): number {
		return this.length;
	}

	public isEmpty(): boolean {
		return this.length === 0;
	}

	public forEach(callback: (element: T) => void): void {
		if (!this.head) {
			return undefined;
		}
		let count = 0;
		let current: Node<T> = this.head;
		while (count < this.size()) {
			callback(current.getElement());
			current = current.getNext() as Node<T>;
			count++;
		}
	}
}

export default DoublyLinkedList;
