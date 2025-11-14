//hashMap or set:
var hasCycle = function(head) {
    let set = new Set();
    let curr=head;
    while(curr){
        if(set.has(curr)){
            return true
        }else{
            set.add(curr);
            curr=curr.next;
        }
    }
    return false
};

//flyod algorithm:
var hasCycle = function(head) {
    if(!head||!head.next)return false;
    let slow=head;
    let fast=head.next;
    while(slow!=fast){
        if(fast===null||fast.next===null)return false;
        slow=slow.next;
        fast=fast.next.next;
    }
    return true;
};
