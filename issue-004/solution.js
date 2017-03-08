function grade(a) {
    // implement your solution here
    try {
   if(a < 0 || a >100) throw "Not within the range";
    if(isNaN(a)) throw "Not a number";
   if (a >= 80 && a <= 100 ){
     return 'A';
   }
   else if(a >= 60 && a <= 79){
     return 'B';
   }else if(a >= 50 && a <= 59){
     return 'C';
   }else if(a >= 40 && a <= 49){
     return 'D';
   }else if(a >= 30 && a <= 39){
     return 'E';
   }else{
     return 'F'
   }



}
catch(err) {
   console.log(err);
}
}
