function removeElement(arr,val){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==val){
            arr[x]=arr[i];
            x++;
        }
    }
    return x;
}

let arr=[1,2,3,4,5];
let ans=removeElement(arr,3);
console.log(ans);
