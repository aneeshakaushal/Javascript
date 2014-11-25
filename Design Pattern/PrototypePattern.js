var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};

var yourCar = Object.create(myCar);

console.log(yourCar.name);

//without using object create
var vehiclePrototype = {
 
  init: function ( carModel ) {
    this.model = carModel;
  },
 
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};

function vehicle (model) {
	// body...
	function F() {};

	F.prototype = vehiclePrototype;

	var f = new F();
	f.init (model);
	return f;
}

var car = vehicle("Ford");
car.getModel();

//using module

var beget = (function  () {
	// body...
	function F() {};
	return function (proto) {
		// body...
		F.prototype =proto;
		return new F();
	}
})();



