var db = require('../Dbconnection');
var Driver = {
	validateLogin:function(phone, password, callback){
		return db.query('SELECT intid FROM btk_driver WHERE mobilephone =?', [phone], callback);
	},

	// thinhav: lay thong tin cac chuyen di trong ngay theo id lai xe
	getTripByIdDriver:function(idDriver, callback){
		console.log('getTripByIdDriver - idDriver  = ' + idDriver);
		return db.query(`SELECT btk_tripbydate.intid, driverid, bringtime, vehicleid, routid, btk_route.name,  btk_vehicleranger.name, Date, btk_vehicle.license 
			 FROM btk_tripbydate 
		    	INNER JOIN btk_vehicle ON btk_tripbydate.vehicleid = btk_vehicle.intid
		    	INNER JOIN btk_vehicleranger ON btk_tripbydate.vehiclerangerid = btk_vehicleranger.intid
		    	INNER JOIN btk_route ON btk_tripbydate.routid = btk_route.intid
			WHERE btk_tripbydate.driverid =?`, [idDriver], callback);
	}

}
module.exports = Driver;
