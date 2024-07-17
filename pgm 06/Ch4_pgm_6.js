var sayHello;

sayHello = function () {
	console.log("Universe!");
};

sayHello();
sayHello();
sayHello();

sayHello = function () {
	console.log("Hello\nWorld!");
};
sayHello();
sayHello();
sayHello();


var printLetters;

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message.charAt(i));
    }
};

printLetters();

