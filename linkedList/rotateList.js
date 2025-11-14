var rotateRight = function(head, k) {
    let length=0;
    let curr=head;
    while(curr){
        length++;
        curr=curr.next;
    }
    k=k%length;
    let slow=head;
    let fast=head;
    for(let i=0;i<k;i++){
        fast=fast.next;
    }
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    fast.next=head;
    let newHead=slow.next;
    slow.next=null;
    return newHead;
};