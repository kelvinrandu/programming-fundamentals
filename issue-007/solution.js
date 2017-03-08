// implement your solution here
function superSum() {
  var sum = 0;
a.forEach(function(entry) {

    while(entry > 0)
    {
        sum += entry%10;
        entry = Math.floor(entry/10);
    }
  //  console.log(sum);
});
    return sum;

}
