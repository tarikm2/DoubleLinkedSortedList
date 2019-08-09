let { ListNode } = require('./list_node');

class LinkedList {
	constructor (head) {
		if(!(head instanceof ListNode)) {
			throw new Error('cannot instantiate without a head node');
		}
		this.head = head;
		this.tail = head;
		this.length = 1;
	}

	insert(toInsert) {
		if(this.head.compareTo(toInsert) >= 0) {
			this.head.prev = toInsert;
			toInsert.next = this.head;
			this.head = toInsert;
		}
		else if (this.tail.compareTo(toInsert) < 0) {
			this.tail.next = toInsert;
			toInsert.prev  = this.tail;
			this.tail = toInsert;
		}
		else {
			let indexToInsertAt = this._getIndex(toInsert);
			let ref = this.head;
			//get the reference
			//can be more efficient if we chose the shortest end of the list to iterate from from. beginning or end.
			for(let i = 0; i < indexToInsertAt; i++) {
				ref = ref.next;
			}

			let prev = ref.prev;

			prev.next = toInsert;
			ref.prev = toInsert;
			toInsert.next = ref;
			toInsert.prev = prev
		}
		this.length++;
	}

	delete(toDelete) {

		if(this.length === 0) {
			return;
		}
                if(this.head.compareTo(toDelete) === 0) {
			if(this.length === 1) {
				this.head = undefined;
				this.tail = undefined;
			}
			else {
				this.head = this.head.next;
				this.head.prev = undefined;
			}
                }
		else if (this.tail.compareTo(toDelete) === 0) {
			this.tail = this.tail.prev;
			this.tail.next = undefined;
		}
		else {
			let indexToDelete = this._getIndex(toDelete);
                        let ref = this.head;
			for(let i = 0; i < indexToDelete; i++) {
				ref = ref.next;
			}
			if(ref.compareTo(toDelete) != 0) {
				return;
			}

			let prev = ref.prev;
			let next = ref.next;
			prev.next = next;
			next.prev = prev;
		}
		this.length--;
	}

	// this could be more efficient by using a binary search
	// this is not a true get index in that if it cannot find a value within the range of head and node, then it will return the index at which that value SHOULD be.
	_getIndex (node) {
		// if node value is less than head or greater than tail, it isn't in the list.
                let headCompareVal = this.head.compareTo(node);
		let tailCompareVal = this.tail.compareTo(node) ;

		if(headCompareVal > 0) {
			return -1;
		}
		if(tailCompareVal < 0) {
			return -1;
		}
		if(headCompareVal === 0) {
			return 0;
		}
		// using this get index during insert will cause unstable sorting, since we will insert at the end of similar value runs in the case that tailCompareVal === 0
		if(tailCompareVal === 0) {
			return this.length - 1;
		}
		
		let ref = this.head;
		let index = 0;
		while (ref.compareTo(node) < 0) {
                        ref = ref.next;
			index++;
                }	
		return index;
	}

	toString() {
		let listString = `${this.head.value}`;

		let ref = this.head.next;

		while(ref) {
			listString += ` -> ${ref.value}`;
			ref = ref.next;
		}

		let listStringBack = `${this.tail.value}`;
		ref = this.tail.prev;

		while(ref) {
			listStringBack += ` -> ${ref.value}`;
			ref = ref.prev;
		}

		return `List Forward: ${listString} ... List Backward: ${listStringBack}`;
	}

}

module.exports = {
	LinkedList
};

