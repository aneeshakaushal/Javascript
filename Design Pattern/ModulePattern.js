var myObjectLiteral ={
	variableKey : "variableValue",
	functionKey : function(){
		//...
	}
}

var myModule = {
	myProperty:"someValue",

	myConfig:{
		useCaching:true,
		language:"en"
	},

	saySomething: function () {
		console.log("Where in the world are you??")
	},

	reportmyConfig: function () {
		console.log("Caching is :" + (this.myConfig.useCaching ? "enabled" : disabled));
	},

	updateMyConfig: function(newConfig){
		if(typeof newConfig === "object"){
			this.myConfig=newConfig;
			console.log(this.myConfig.language);
		}
	}
};

console.log("Hello i can access a property "+myModule.myConfig.language);

myModule.saySomething();

myModule.reportmyConfig;

myModule.updateMyConfig({
	language : "fr",
	useCaching:false
});

var testModule = (function(){
	var counter = 0;
	return{
		incrementCounter : function (argument) {
			// body...
			return counter++;
		},
		resetCounter: function (argument) {
			// body...
			console.log("counter value prior to reset "+ counter);
			counter=0;
		}
	};
})();

//Usage:
console.log("Hello i can't access a property "+testModule.counter);

testModule.incrementCounter();

testModule.resetCounter();

var myNameSpace= (function(){
	var myPrivateVar, myPrivateMethod;
	myPrivateVar = 0;
	myPrivateMethod= function (foo) {
		// body...
		console.log(foo);
	};

	return {
		//A public variable
		myPublicVar:"foo",

		myPublicFunction: function (bar) {
			// body...

			//Increment our private counter
			myPrivateVar++;

			//Call our private method using bar
			myPrivateMethod( bar );
		}
	};
})();


//shopping basket implemented using this pattern

var basketModule = (function () {
	// body...
	var basket=[];
	function doSomethingPrivate(){

		console.log("wasn't i private?!")

	};
	function doSomethingElsePrivate (argument) {
		// body...
	}

	return{

		//Add items to your basket
		addItem : function (values) {
			// body...
			basket.push(values);
		},
		getItemCount : function () {
			// body...
			return basket.length;
		},
		
		doSomething : doSomethingPrivate,
		
		getTotal : function () {
			// body...
			var q = this.getItemCount(),
			p=0;

			while(q--){
				p+=basket[q].price;
			}
			return p;
		}
	};

})();

basketModule.addItem({
	item : "bread",
	price:0.5
});

basketModule.addItem({
	item : "butter",
	price:0.3
});
console.log("Basket Module output");
console.log(basketModule.getItemCount());

console.log(basketModule.getTotal());

//Undefined as private
console.log(basketModule.basket);

//console.log(basket);


// Global module
var myModule = (function () {
 
  // Module object 
  var module = {},privateVariable = "Hello World";
 
  function privateMethod() {
    // ...
  }
 
  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };
 
  return module;
 
})();

console.log(myModule.publicProperty);