var mediator = {};

var orgChart = {
	addNewEmployee : function(){

		 var employeeDetail = this.getEmployeeDetail();

		 employeeDetail.on("complete",function(employee){

		 	var managerSelector = this.selectManager(employee);
		 	managerSelector.on("save",function(employee){
		 		employee.save();
		 	});
		 });
	}
}

var MenuItem = MyFrameworkView.extend({
	events : {
		"click .thatThing" : "clickedIt"
	},

	clickedIt : function (e) {
		// body...
		e.preventDefault();
		//assume this triggers "menu : click : foo "
		MyFramework.trigger("menu:click:"+this.model.get("name"));
	}
});


	var MyWorkflow = function  () {
		// body...
		MyFramework.on("menu:click:foo",this.doStuff,this);
	}
	
