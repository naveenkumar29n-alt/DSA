var oddEvenList = function(head) {
    if(!head||!head.next)return head;
    let odd=head;
    let even=head.next;
    let evenStart=even;
    while(odd.next&&even.next){
        odd.next=odd.next.next;
        odd=odd.next;
        even.next=even.next.next;
        even=even.next;
    }
    odd.next=evenStart;
    return head
    };