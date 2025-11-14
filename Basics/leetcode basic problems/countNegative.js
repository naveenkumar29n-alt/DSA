function countNeg(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}

let arr=[1,-2,3,-5,6,-8];
let ans=countNeg(arr);
console.log(ans);
