class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAt(value, position) {
    let newNode = new Node(value);

    // Case 1: Insert at the head (position 0)
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Case 2: Insert at any other position
    let current = this.head;
    let previous = null;
    let count = 0;

    while (current !== null && count < position) {
      previous = current;
      current = current.next;
      count++;
    }

    // Insert the new node
    if (previous !== null) {
      previous.next = newNode;
      newNode.next = current;
    } else {
      console.log("Position out of bounds");
    }
  }

  printList() {
    let current = this.head;
    let list = "";
    while (current !== null) {
      list += current.value + " -> ";
      current = current.next;
    }
    console.log(list + "null");
  }
}

let list = new LinkedList();

list.insertAt(12, 0);
list.insertAt(20, 1);
list.insertAt(25, 2);
list.insertAt(15, 1);

list.printList();
