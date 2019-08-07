
class LinkedList {
	constructor (head) {
		if(!(head instanceof Node) {
			throw new Error('cannot instantiate without a head node');
		}
		this.head = head;
		this.tail = head;
		this.length = 1;
	}

	insertValue(toInsert) {
		let indexToInsertAt = this._getIndex(toInsert);
		
		let ref = this.head;
		if(indexToInsertAt < 0) {
			// insert at the end of the list
			this.tail.next = toInsert;
			toInsert.prev = this.tail;
			this.tail = toInsert;
		}
		else if(indexToInsertAt === 0) {
			// insert at begining of list
			this.head.prev = toInsert;
			toInsert.next = this.head;
			this.head = toInsert;
		}
		else {
			//get the reference
			//can be more efficient if we chose the shortest end of the list to iterate from from. beginning or end.
			for(let i = 0; i <= indexToInsertAt; i++) {
				ref = ref.next;
			}

			toInsert.next = ref;
			toInsert.prev = ref.prev;
			ref.prev = toInsert;
			toInsert.prev.next = toInsert;
		}
		this.length++;
	}

	deleteValue(toDelete) {
                if(this.compareTo(toDelete) === 0) {
                        // delete this.head
                }
		else {

			let indexToDelete = this._getIndex(toDelte);
			let ref = this.head;
 			if (indexToDelete === -1) {
				// no value to delete
				return;
			}
			else if (indexToDelete === this.length - 1) {
				// delete tail
			}
			for(let i = 0; i <= indexToDelete; i++) {
				ref = ref.next;
			}
			let prev = ref.prev;
			let next = ref.next;
			prev.next = next;
			next.prev = prev;
		}
		this.length--;
	}
dfasdf

	// this could be more efficient by using a binary seay
	_getIndex (node) {
                let ref = this.head;
		let index = 0;
                while (ref.next && ref.compareTo(node) < 0) {
                        ref = ref.next;
			index++;
                }
		
		if(!ref.next && ref.compareTo(toInsert) < 0) {
			return -1;
		}

		return index;
	}

}

class Node {
	constructor (val) {
		this.value = val;
	}

	compareTo(other) {
		return this.value - other.value;
	}
}

module.exports = {
	LinkedList
};

