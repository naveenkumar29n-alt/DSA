function countDigits(n){
  let count=0;
  while(n>0){
    n=Math.floor(n/10);
    count++;
  }
  return count;
}

let n=1234598;
let ans=countDigits(n);
console.log(ans);
