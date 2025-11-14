function singleNumber(arr){
    // let xor=0;
    // for(let i=0;i<arr.length;i++){
    //     xor=xor^arr[i];
    // }
    // return xor;
    let hash={};
    for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            hash[arr[i]]=1;
        }else{
            hash[arr[i]]++;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]===1){
            return arr[i]
        }
    }
}


let arr=[1,1,2,2,3,4,4];
let ans=singleNumber(arr);
console.log(ans);
