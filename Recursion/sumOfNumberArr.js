function sum(n){
  if(n<1)return arr[0];
  return arr[n]+sum(n-1);
}

let arr=[4,5,6];
let ans=sum(arr.length-1);
console.log(ans);
