
function add(a,b){
    console.log(a+b);
    
}

add(10,20);

function square(n){
    return n*n;
    
}

let ans=square(2);
console.log(ans);

function isEvenOdd(n){
    if(n%2===0)console.log("even number");
    else console.log("odd number");
    
    
}

isEvenOdd(19);


function vote(age){
    if(age<1)console.log("invalid age input");
    else if(age<18)console.log("not allowed under age");
    else console.log("allowed to vote");
    
    
    
}

vote(21)