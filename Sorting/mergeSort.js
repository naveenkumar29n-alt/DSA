function sortArr(arr){
  if(arr.length<=1)return arr;
  let mid=Math.floor(arr.length/2);
  let left=sortArr(arr.slice(0,mid));
  let right=sortArr(arr.slice(mid))
  return merge(left,right);
}
function merge(left,right){
  let i=0;
  let j=0;
  let res=[];
  while(i<left.length&&j<right.length){
    if(left[i]<right[j]){
      res.push(left[i]);
      i++
    }else{
      res.push(right[j]);
      j++;
    }
  }
  return [...res,...left.slice(i),...right.slice(j)]
}

let arr= [4, 5, 1, 3, 9]
let ans=sortArr(arr);
console.log(ans);
