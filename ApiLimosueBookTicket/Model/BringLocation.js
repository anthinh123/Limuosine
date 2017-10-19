// thinhav: thong tin diem don, diem xuong danh cho khach
var db = require('../Dbconnection');

var Location = {
	// thinhav: query ten dien di, diem xuong doc theo tuyen di
		getLocationByIdRoute:function(idRoute, callback){
			return db.query("SELECT name FROM btk_bringlocation WHERE routeid =?",[idRoute], callback);
		}
}
module.exports = Location;