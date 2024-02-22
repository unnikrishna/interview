// RECRUSSIVE

function recursivelyReverseList(head) {
    // base case
    if (head === null || head.next === null) {
        return head;
    }
    let reversedHead = recursivelyReverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedHead;
}
// NORMAL
function reverse(llist) {
    let headNode = llist;
    if(headNode == null || headNode.next == null) return;

    let currebtNode = headNode,
      previousNode = null,
      nextNode = null;

    while(currentNode){
      nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode;
      currenyNode = nextNode;
      nextNode = null
      
    }
  head = previousNode;
  return head;
}




// DOUBLE
function reverseDLL(dll){
    let headNode = dll.head,
        currentNode = dll.head,
        temp = null;
    while(currentNode){
        temp = currentNode.next
        currentNode.next = currentNode.previous;
        currentNode.previous = temp;
        if(temp ==null){
            dll.head = currentNode
        }
        currentNode = temp;
    }
    return dll
}
