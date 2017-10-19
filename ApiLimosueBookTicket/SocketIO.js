var mTicketBySeat = require('./Model/TicketBySeat');
var mIO;
var SocketIO = {
	initSocket: function (io) {
		mIO = io;
		// thinhav: ket noi socket voi cac client
		io.on('connection', function(socket) {
			console.log("Co nguoi connect toi server");
			// thinhav: 1 cong ket noi co ten la message de nhan cac tin nhan tu client gui len co ten thong diep la message
	    	socket.on('message', function(msg){
	    		var idSeat = msg.id;
			    console.log('id: ' + idSeat);
			    mTicketBySeat.UpdateStatusSeat(msg.id, msg.status, function(err, rows){
			        if(err){
			           err;
			        } else {
			            mTicketBySeat.GetTicketByIdSeat(idSeat, function(err, rows){
				            if(err){
				                err;
				            } else {
				            	io.sockets.emit('updateSeat', rows);
				            }
				        }); 
			        }
    			});
			    // emit toi tat ca moi nguoi
				//io.sockets.emit('updateSeat',msg);
				
				// emit tới máy nguoi vừa gửi
				//socket.emit('serverguitinnhan', { noidung: data });
	    	});

		});
	},

}
module.exports = SocketIO;




