function isPowerOfTwo(n){
    if(n===1)return true;
    if(n%2!==0||n<1)return false;
    return isPowerOfTwo(n/2);
}

let ans=isPowerOfTwo(256);
console.log(ans);
