function smallest(arr){
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}

let arr=[1,4,6,-7,-1,8];
let ans=smallest(arr);
console.log(ans);
