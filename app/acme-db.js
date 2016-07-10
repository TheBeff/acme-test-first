function Employee(name, id){
	this.name = name;
	this.id = id;
};

function AcmeDb(){
	this.employees = [];
};

AcmeDb.prototype.getEmployees = function(){
	return this.employees.sort(function(a,b){
		  var nameA = a.name.toUpperCase(); 
  		  var nameB = b.name.toUpperCase();
  		  if (nameA < nameB) {
    		return -1;
  		  }
  		  if (nameA > nameB) {
    		return 1;
  		  }
 		  return 0;
	});
};


AcmeDb.prototype.addEmployee = function(name, id){
	var newEmp = new Employee(name, id);
	this.employees.push(newEmp);
};

AcmeDb.prototype.getEmployee = function(id){
	for (var i = 0; i < this.employees.length; i++){
		if ( this.employees[i].id === id ){
			return this.employees[i];
		};		
	};
};

AcmeDb.prototype.deleteEmployee = function(emp){
	var index = this.employees.indexOf(emp);
	if (index > -1) this.employees.splice(index, 1);
};

AcmeDb.prototype.groupedEmployees = function(){

};