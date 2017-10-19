var db = require('../Dbconnection');

var Offical={
    getAllOffice:function(callback){
        return db.query("Select office_id, name, mobile_phone from office",callback);
    },
    getOfficeByType:function(type,callback){
        return db.query("Select office_id, name from office where type =?",[type],callback);
    },
};
 module.exports=Offical;