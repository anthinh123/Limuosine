var db = require('../Dbconnection');

var TripByDate={
    getTripByIdRoute:function(id_route, date, callback){
    	var queryString = "SELECT intid, name, starttime from btk_tripbydate WHERE routid= ? AND Date= ?;"
		var filter = [id_route, date];
        return db.query(queryString, filter, callback);
    },
    
};
 module.exports=TripByDate;