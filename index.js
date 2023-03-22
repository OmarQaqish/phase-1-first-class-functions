function receivesAFunction(callback) {
    console.log(callback());
}

receivesAFunction(function () { return "This function is call back function."});

function returnsANamedFunction() {
    function cbFunction() {
      console.log("This is a named function.");
    }
    return cbFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
}
