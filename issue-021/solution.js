// implement your solution here
function oldAndYoung(students) {


var min= students.reduce((prev, curr) => prev.yearOfBirth < curr.yearOfBirth ? curr : prev) ;
var max= students.reduce((prev, curr) => prev.yearOfBirth > curr.yearOfBirth ? curr : prev) ;

var obj = new Object();
obj.youngest = min.name ;
obj.oldest = max.name;
return obj;


}
