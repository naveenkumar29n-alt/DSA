function search(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return i;
    }
  }
  return -1;
}


let arr=[1,5,7,8,9];
let ans=search(arr,7);
console.log(ans);
