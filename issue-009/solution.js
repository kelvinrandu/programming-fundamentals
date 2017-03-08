// implement your solution here
function sumEven(a) {
  //reduce to get the sum of even numbers
evenSum = a.reduce(function(sumEven, num){
  if(num%2==0){
    sumEven+=num;
  }
  return sumEven;
},0);



  return evenSum ;

}
