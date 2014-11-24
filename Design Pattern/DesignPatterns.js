var newObject = {};

var newObject=Object.create(Object.prototype);

var newObject = new Object();

function Car(model,year,miles){
	this.model = model;
	this.year= year;
	this.miles=miles;

	this.toString = function(){
		return this.model + " has done "+this.miles+" miles.";
	}
}

//Usage

//We can create new instances of the car
var civic = new Car ("Honda Civic",2000,20000);
var mondeo =new Car("Ford Mondeo",2010,5000);

console.log(civic.toString());
console.log(civic.toString());


//Constructor with prototype

function Car2(model,year,miles){
	this.model = model;
	this.year= year;
	this.miles=miles;

	
}

Car2.prototype.toString = function(){
		return this.model + " has done "+this.miles+" miles.";
	};

var civic = new Car2 ("Honda Civic2",2000,20000);
var mondeo =new Car2("Ford Mondeo2",2010,5000);

console.log(civic.toString());
console.log(civic.toString());