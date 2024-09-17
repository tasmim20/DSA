class LinkedList {
  constructor() {
    this.head = null; // Points to the first node in the list
  }

  // Method to add a node at the nth position
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

    // Traverse the list until we find the correct position or reach the end
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

  // Helper method to display the list
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

list.insertAt(10, 0); // Insert 10 at position 0
list.insertAt(20, 1); // Insert 20 at position 1
list.insertAt(30, 2); // Insert 30 at position 2
list.insertAt(15, 1); // Insert 15 at position 1 (between 10 and 20)

list.printList(); // Output: 10 -> 15 -> 20 -> 30 -> null
