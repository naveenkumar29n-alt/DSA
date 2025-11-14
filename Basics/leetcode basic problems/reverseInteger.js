function reverse(n){
    let original=n;
    n=Math.abs(n);
    let rev=0;
    while(n>0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    let limit=2**31;
    if(rev<-limit||rev>limit)return  0;
    return original<0?-rev:rev;
}

let n=-54321;
let ans=reverse(n);
console.log(ans);
