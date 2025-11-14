function isPalindrome(n){
    if(n<0)return false;
    let rev=0;
    let original=n;
    while(n>0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return original===rev;
}
let n=121;
let ans=isPalindrome(n);
console.log(ans);
