

let { assert, expect } = require('chai');
let { LinkedList } = require('../../double_linked_sorted_list');
let { ListNode } = require('../../list_node');

let makeList = () => {
	let head = new ListNode(1);
        let list = new LinkedList(head);
        let secondNode = new ListNode(2);
        let thirdNode = new ListNode(4);
        head.next = secondNode;
        secondNode.prev = head;

        secondNode.next = thirdNode;
        thirdNode.prev = secondNode;

        list.tail = thirdNode;
        list.length = 3;
        return list;
}


describe('doubly linked sorted list', () => {
	describe('create a list', () => {
		it('should fail to make a list without a head node', () => {
			let wrapper = () => {
				return new LinkedList();
			};
			expect(wrapper).to.throw(Error);
		});

		it('should fail to make a list because incorrect type for head node', () => {
			let wrapper = () => {
				return new LinkedList({});
			};
			expect(wrapper).to.throw(Error);
		});

		it('should succeed in creating the list', () => {
			let headNode = new ListNode(5);
			let list = new LinkedList(headNode);

			expect(list).to.be.instanceOf(LinkedList);
			expect(list.length).to.equal(1);
			expect(list.head).to.equal(headNode);
			expect(list.tail).to.equal(headNode);
		});
	});

	describe('find the index of an item', () => {

		let makeList = () => {
			let head = new ListNode(1);
			let list = new LinkedList(head);
			let secondNode = new ListNode(2);
			let thirdNode = new ListNode(4);
			head.next = secondNode;
			secondNode.prev = head;

			secondNode.next = thirdNode;
			thirdNode.prev = secondNode;
			
			list.tail = thirdNode;
			list.length = 3;
			return list;
		};

		it('should return 0 since the item to find is the head', () => {
			let list = makeList();
			let toSearch = new ListNode(1);
			let index = list._getIndex(toSearch);
			console.log('actual is', index);
			expect(index).to.equal(0);
		});

		it('should return the last index since the item to find is the tail', () => {
			let list = makeList();
			let index = list._getIndex(new ListNode(4));
			expect(index).to.equal(2);
		});

		it('should return -1 since the node is less than any node in list', () => {
			let list = makeList();
			let index = list._getIndex(new ListNode(0));
			expect(index).to.equal(-1);
		});

		it('should return -1 since the node is greater than any node in list', () => {
			let list = makeList();
			let index = list._getIndex(new ListNode(5));
			expect(index).to.equal(-1);
		});

		it('should find the index of an exsisting node in the list',() => {
			let list = makeList();
			let index = list._getIndex(new ListNode(2));
			expect(index).to.equal(1);
		});

		it('should return the index of where a node should be if added to the list', () => {
			let list = makeList();
			let index = list._getIndex(new ListNode(3));
			expect(index).to.equal(2);
		});
	});

	describe('insert an item into the list', () => {
		it('should insert an item at the beginning of the list', () => {

		});

		it('should insert an item in the middle of the list', () => {

		});

		it('should insert an item at the end of the list', () => {

		});
	});

	describe('delete an item from the list', () => {
		it('should delete an item at the beginning of the list', () => {

		});

		it('should delete an item in the middle of the list', () => {

		});

		it('should delete an item at the end of the list', () => {

		});

		it('should not delete any items because item not in list', () => {
		
		});
	});
});
