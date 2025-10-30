function move(arr){
  let x=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[x]=arr[i];
      x++;
    }
  }
  for(let i=x;i<arr.length;i++){
    arr[i]=0;
  }
  return arr;
}

let arr=[1,0,2,0,3,0,4,5];
let ans=move(arr);
console.log(ans);
