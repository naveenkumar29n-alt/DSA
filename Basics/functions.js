function add(a,b){
  let ans=a+b;
  return ans;
}

let ans=add(10,200);
console.log(ans);


function vote(age){
  if(age<0)console.log("invalid age input");
  else if(age<18)console.log("under age not allowed");
  else console.log("eligible to vote");
}

vote(25)


function evenOdd(n){
  if(n%2===0)console.log("even number");
  else console.log("odd number");
  
  
}

evenOdd(21)



function square(n){
  let ans=n*n;
  console.log(ans);
  
}

square(4)