var counter = function(arr){
  return ' there are ' + arr.length + ' elements here';

};

var adder = function(a,b){
  return `the sum of the 2 numbers is ${a+b}`;
};

var pi = 3.14159;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
