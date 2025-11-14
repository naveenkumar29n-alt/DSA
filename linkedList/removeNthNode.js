//two pass:
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next=head;
    let length=0;
    let curr=head;
    while(curr){
        curr=curr.next;
        length++;
    }
    let prevPos=length-n;
    let prev=sentinel;
    for(let i=0;i<prevPos;i++){
        prev=prev.next;
    }
    prev.next=prev.next.next;
    return sentinel.next
    
    };
    //one pass:
    var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next=head;
    let fast=sentinel;
    for(let i=0;i<n;i++){
        fast=fast.next;
    }
    let slow=sentinel;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next
    return sentinel.next
    
    };