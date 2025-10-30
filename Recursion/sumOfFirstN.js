function sum(n){
if(n<1)return 0;
return n+sum(n-1);
}
let n=5;
let ans=sum(n);
console.log(ans);
