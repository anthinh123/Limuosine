var db = require('../Dbconnection');
var Customer = {
	getAllCustomerInfor:function(idTrip, callback){
		return db.query("SELECT customername, phone, waitlocationid FROM btk_ticket WHERE tripbydateid", [idTrip], callback);
	},

	getSeatCustomer:function(idCustomer, callback){
		return db.query(`SELECT seatnumeber FROM  btk_ticketbyseat 
					INNER JOIN btk_seat ON btk_ticketbyseat.seatid = btk_seat.intid
                    INNER JOIN btk_ticket ON btk_ticketbyseat.ticketid = btk_ticket.intid
                    WHERE btk_ticket.customertypeid =` , [idCustomer], callback);
	}
};
module.exports = Customer;