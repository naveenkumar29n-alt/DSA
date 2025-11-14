var removeElements = function(head, val) {
    let sentinel = new ListNode();
    sentinel.next=head;
    let curr=sentinel;
    while(curr&&curr.next){
        if(curr.next.val===val){
            curr.next=curr.next.next;
        }else{
            curr=curr.next;
        }
    }
    return sentinel.next;
};