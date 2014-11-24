var mySingleton = (function(){
    
    var instance;
    function init () {
        // body...

        //Singleton
        function privateMethod () {
            // body...
            console.log("I am private");
        }

        var privateVariable = "I am also private";

        var privateRandomNumber = Math.random();

        return {
            //Public methods and variables

            publicMethod : function  (argument) {
                // body...
                console.log("The public can see me!");
            },

            publicProperty : "I'm also public",

            getRandomNumber : function  (argument) {
                // body...

                return privateRandomNumber;
            }
        };
    };

    return {
        getInstance : function () {
            // body...
            if(!instance){
                instance = init();
            }

            return instance;
        }
    }

})();

var myBadSingleton = (function(){

    var instance;
    function init() {
        // body...
        var privateRandomNumber=Math.random();

        return{
            getRandomNumber:function () {
                // body...
                return privateRandomNumber;
            }
        };
    };

    return {
        getInstance : function () {
            // Always create a new Singleton instance
            instance = init();
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber());


var badsingleA = myBadSingleton.getInstance();
var badsingleB = myBadSingleton.getInstance();

console.log(badsingleA.getRandomNumber() !== badsingleB.getRandomNumber());