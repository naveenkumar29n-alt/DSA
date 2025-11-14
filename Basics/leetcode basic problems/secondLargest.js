function secondLargest(arr){
    let fMax=-Infinity;
    let sMax=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>fMax){
            sMax=fMax;
            fMax=arr[i];
        }
        else if(arr[i]>sMax&&arr[i]!=fMax){
            sMax=arr[i];
        }
    }
    return sMax;
}

let arr=[10,20,30,40,40];
let ans=secondLargest(arr);
console.log(ans);
