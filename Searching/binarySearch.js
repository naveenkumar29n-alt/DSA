function search(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(target===arr[mid])return mid;
        if(target<arr[mid])end=mid-1;
        else start=mid+1;
    }
    return -1;
}

let arr=[10,20,30,44];
let ans=search(arr,30);
console.log(ans);
