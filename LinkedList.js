// Singly Linked List

function LinkedList(){  
  this.head = null;
}
LinkedList.prototype.push = function(val){
  var node = {
    value: val
    next: null
  }
  if(!this.head){
    this.head = node
  }else {
    current = this.head
    while(current.next){
      current = current.next
    }
    current.next = node;
    
  }
}
// EXAMPLES
var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList 
sll.head; //Object {data: 2, next: Object}
sll.head.next; //Object {data: 3, next: Object}
sll.head.next.next; //Object {data: 4, next: null}



// Double Linked list

function DoubleLinkedList(){  
  this.head = null;
}
DoubleLinkedList.prtotype.push = function(val){
  var head = this.head,
    current = this.head,
    previous = this.head;
  if(!head){
    this.head = {value:val, previous: null, next: null}
  }else {
    while(current && current.next){
      previous = current;
      current = current.next;
    }
    current.next = {value: val, previous: current, next: null}
  }
}

// EXAMPLES
//test at least once
var dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);

