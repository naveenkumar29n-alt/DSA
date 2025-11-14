function buyAndSell(arr){
    let minProfit=arr[0];
    let maxProfit=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minProfit){
            minProfit=arr[i];
        }
        if(arr[i]-minProfit>maxProfit){
            maxProfit=arr[i]-minProfit;
        }
    }
    return maxProfit;
}

let arr=[1,4,5,6,8,2];
let ans=buyAndSell(arr);
console.log(ans);
