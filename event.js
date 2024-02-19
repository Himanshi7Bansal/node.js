// import event module
var EventEmitter = require('events');   // class
var event = new EventEmitter(); // object of class

// create an event handler
var handler = function(){
    console.log("Event Handled");
}
// assign the event handler to an event
event.on('hi', handler);
// fire the hi event
event.emit("hi");