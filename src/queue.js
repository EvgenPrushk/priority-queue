const MaxHeap = require('./max-heap.js');


class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap();
		if (maxSize != null) {
            this.maxSize = maxSize;
		} 
	}

	push(data, priority) {
		if (this.size() < this.maxSize) {
			this.heap.push(data, priority);
		} else {
			throw new Error('Not valid size');
		}
	}

	shift() {
		if (this.size() > 0) {
			return this.heap.pop();
		} else {
			throw new Error('The queue is empty');
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return  this.heap.isEmpty();
	}
}
	

module.exports = PriorityQueue;
