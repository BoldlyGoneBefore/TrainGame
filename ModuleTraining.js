function callFunction(stuff){
  stuff();
}


var sayBye = function(){
  console.log("Bye");
};

callFunction(sayBye);
