// implement your solution here

  function Person(name,age) {
    this.name = name;
    this.age = age;

  this.walk = function(s) {
    this.walked += s;
        return(this.walked);
    };
    this.greet = function(d) {
      var f  = d.name;
         return("hello" + " " + f );
      };
};
Person.prototype.walked = 0;

//Person.prototype.greet = function(d) {
//var f  = (d).name;
//    return(" hello" + " " + f );
//};
