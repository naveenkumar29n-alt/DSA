var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let curr=slow;
    let prev=null;
    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    let first=head;
    let second=prev;
    while(second){
        if(first.val!=second.val)return false;
        first=first.next;
        second=second.next;
    }
    return true
};