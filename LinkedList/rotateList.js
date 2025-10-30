var rotateRight = function(head, k) {
    if(!head||!head.next)return head
    let length=0;
    let curr=head;
    while(curr){
        curr=curr.next;
        length++;
    }
    k=k%length;
    let fast=head;
    let slow=head;
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
    return newHead
};