function print(n){
  if(n===6)return 
  console.log(n);
  print(n+1)
  
}

print(1);


function print1(n){
  if(n<1)return
  console.log(n);
  print1(n-1);
  
}

print1(5)