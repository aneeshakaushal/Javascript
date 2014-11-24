function ObserverList(){
	this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
	// body...
	return this.observerList.push(obj);
};
ObserverList.prototype.get = function (index) {
	// body...
	if(index > -1 && index <this.observerList.length){
		return this.observerList[index];
	}
};
ObserverList.prototype.count = function () {
	// body...
	return this.observerList.length;
}

ObserverList.prototype.indexOf = function (obj,startIndex) {
	// body...
	var i = startIndex; 
	while(i<this.observerList.length){
		if(this.observerList[i] === obj){
			return i;
		}
		i++;
	}
	return -1;
}

function Subject(){
  this.observers = new ObserverList();
}
 
Subject.prototype.addObserver = function(observer){
  this.observers.add( observer );
};
 
Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
 
Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

function Observer(){
  this.update = function(){
    // ...
  };
}

//Extend an object with an extension
function extend (extension, obj) {
	// body...
	for(var key in extension){
		obj[key] = extension[key];
	}
}

//References to our DOM elements

window.onload = function(){
	var controlCheckbox = document.getElementById("mainCheckbox"),
addBtn = document.getElementById("addNewObserver"),
container = document.getElementById("observersContainer");


//Contrete Subject

//Extend the controlling checkbox with the Subject class
extend(new Subject(), controlCheckbox);

controlCheckbox.onclick = function () {
	// body...
	controlCheckbox.notify(controlCheckbox.checked);
}

addBtn.onclick = addNewObserver;

//Concrete Observer

function addNewObserver () {
	// body...
	var check = document.createElement( "input");
	check.type="checkbox";

	//Extend the checkbox with the Observer class
	extend(new Observer(),check);

	check.update = function(value){
		this.checked = value;
	};

	controlCheckbox.addObserver(check);
	container.appendChild(check);

}
}
