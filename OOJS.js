//global namespace
var MYAPP = MYAPP || {};

//sub namespace
MYAPP.event  = {};

//Create container called MYAPP.commonMethod for common method and properties
MYAPP.commonMethod = {
	regExForName : "";
	regExForPhone : "";
	validateName : function(name){
		//DO something with name, you can acced regExForPhone variable 
		//using "this.regExForPhone"
	},
}