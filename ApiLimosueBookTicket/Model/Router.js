var db = require('../Dbconnection');
var Router = {
	getRouteByIdOffice:function(id_office, callback){
		return db.query("Select * from btk_route where departmentid =?",[id_office],callback);
	}
};
module.exports=Router;
