var events = require('events');
var util = require('util');


//element.on('click',function(){})

/*
var Emitter = new events.EventEmitter();

Emitter.on('someEvent',function(message){
  console.log(message);
});

Emitter.emit('someEvent', "Thanos Snapped");
*/

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var joe = new Person('joe');

var people= [james,mary,joe];

people.forEach(function(Person){
  Person.on('speak',function(message){
      console.log(Person.name +' said: ' + message);
  });
});

james.emit('speak', 'hey dude');
joe.emit('speak', 'I want weed');
