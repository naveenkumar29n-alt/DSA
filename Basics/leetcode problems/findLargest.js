function findLargest(arr){
  let max=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}

let arr=[50,1,4,5,6];
let ans=findLargest(arr);
console.log(ans);
