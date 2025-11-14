function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j>0;j--){
            if(arr[j]<arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
    return arr;
}
let arr=[5,4,3,2,1];
let ans=sort(arr);
console.log(ans);
