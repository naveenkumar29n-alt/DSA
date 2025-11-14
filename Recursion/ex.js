function print1(n){
    if(n===6)return
    console.log(n);
    print1(n+1)
    
}

print1(1)


function print2(n){
    if(n<1)return;
    console.log(n);
    print2(n-1);
    
}

print2(5)