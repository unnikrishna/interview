Linkedlist.prototype.remove = function(val){
  var current = this.head;
  if(current.value == val){
    current = current.next
  }else {
    var previous = current;
    while(current.next) {
      if(current.value == val){
         previous.next = current.next
      }
      previous = current;
      current = current.next
    }
    if(current.value == val){
      previous.next = null
    }
  }
}
