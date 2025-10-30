function findSmallest(arr){
  let min=Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}


let arr=[-1,-7,4,5,7,8];
let ans=findSmallest(arr);
console.log(ans);
