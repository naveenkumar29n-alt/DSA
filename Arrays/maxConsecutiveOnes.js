function maxOnes(arr){
    let currCount=0;
    let maxCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            currCount++;
        }
        else{
            maxCount=Math.max(currCount,maxCount);
            currCount=0;
        }
    }return Math.max(currCount,maxCount);
}

let arr=[1,1,2,3,1,1,1,5];
let ans=maxOnes(arr);
console.log(ans);
