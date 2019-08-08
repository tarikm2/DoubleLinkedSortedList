class ListNode {
	constructor (val) {
		this.value = val;
	}

	compareTo(other) {
		return this.value - other.value;
	}
}

module.exports = {
	ListNode
};


