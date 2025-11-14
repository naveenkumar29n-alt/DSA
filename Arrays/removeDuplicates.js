function removeDuplicate(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x++;
            arr[x]=arr[i];
        }
    }
    return x+1;
}

let arr=[1,1,2,2,3,3,4,4,5,5];
let ans=removeDuplicate(arr);
console.log(ans);
