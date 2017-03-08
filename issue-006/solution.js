// implement your solution here

var f = a.filter(Number);

var newarray =  f.reduce(selectSum,0);


function selectSum(a,b) {
return a + b;
  }
  console.log(newarray);
