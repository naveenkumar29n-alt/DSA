//recursive:
var swapPairs = function(head) {
    if(!head||!head.next)return head;
    let left=head;
    let right=head.next;
    left.next=swapPairs(right.next);
    right.next=left;
    return right
};

//iterative:
var swapPairs = function(head) {
    if(!head||!head.next)return head;
    let sentinel = new ListNode();
    sentinel.next=head;
    let prev=sentinel;
    let curr=head;
    let next=head.next;
    while(curr&&next){
        prev.next=next;
        curr.next=next.next;
        next.next=curr;
        prev=curr;
        curr=prev.next;
        next=curr&&curr.next;
    }
    return sentinel.next
};