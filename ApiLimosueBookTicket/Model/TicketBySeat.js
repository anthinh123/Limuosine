//thinhav: thong tin 1 ve can cap nhat trong qua trinh dat ve
// Mac dinh tren server moi ngay moi se chen 9 cho tuong trung cho 9 ghe ngoi
// khi xay ra thay doi tu client thi tren server chi cap nhat lai ghe ngoi cua 9 cho, ko them moi, xoa bo
// 0 : ghe con trong
// 1: Dang cho nhap thong tin
//2: Dang cho xac nhan (vi du = 30')
// 3: Dat ve thanh cong
var db = require('../Dbconnection');
var mSocket = require('../SocketIO');

var TicketBySeat = {
	// thinhav: lay toan bo thong tin cac ghe trong 1 chuyen
	GetAllSeat:function(idTrip, callback){
		return db.query('SELECT * FROM btk_ticketbyseat WHERE tripbydateid = ?', [idTrip], callback);
	},

	//thinhav:cap nhat trang thai cua ghe
	UpdateStatusSeat:function(idSeat, status, callback){
		var row = db.query('UPDATE btk_ticketbyseat SET status =? WHERE intid = ?', [status, idSeat], callback);
		return row;
	},

	//thinhav: lay thong tin cua 1 ghe theo id ghe
	GetTicketByIdSeat:function(idSeat, callback){
		return db.query('SELECT * FROM btk_ticketbyseat WHERE intid = ?', [idSeat], callback);
	}
	
	
};

module.exports = TicketBySeat;