var express = require('express');
var router = express.Router();
var mOffical = require('./Model/Offical');
var mRouter = require('./Model/Router');
var mTripByDate = require('./Model/TripByDate');
var mBringLocation = require('./Model/BringLocation');
var mTicketBySeat = require('./Model/TicketBySeat');
var responseData = require("./ResponseData");
var Const = require("./Const");

// thinhav: lay thong tin cac doanh nghiep van tai
router.get('/office', function(req,res,next){
    var type = req.query.type; 
    if(type){
        mOffical.getOfficeByType(type, function(err, rows){
            if(err){
                res.json(err);
            } else {
                let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
                resData.data = rows;
                res.json(resData);
            }
        });
    } else{
        mOffical.getAllOffice(function(err,rows){
            if(err){
                res.json(err);
            } else {
                let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
                resData.data = rows;
                res.json(resData);
            }
        });    
    }
});

// thinhav: Lay tat ca thong tin cac tuyen xe chay(vd: Ha Noi - Ninh Binh)
router.get('/routes', function(req, res, next){
    var id_office = req.query.id_office;
    mRouter.getRouteByIdOffice(id_office, function(err,rows){
        if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
        }
    });
});

//  thinhav: lay tat cac thong tin cac chuyen di trong ngay theo id tuyen va ngay
router.get('/tripbydate', function(req, res, next){
    var idRoute = req.query.idRoute;
    var date = req.query.date;
    mTripByDate.getTripByIdRoute(idRoute, date, function(err, rows){
        if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
        }
    });
});

// thinhav: dung de truy van vi tri de don, tra khach
router.get('/bringlocation', function(req, res, next){
    var idRoute = req.query.idRoute;
    mBringLocation.getLocationByIdRoute(idRoute, function(err, rows){
         if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
        }
    });
});

    // thinhav: lay toan bo thong tin bang ticketbyseat theo id chuyen di trong ngay
router.get('/ticketbyseat', function(req, res, next){
    var idTrip = req.query.idTrip;
    var idSeat = req.query.idSeat;
    if(idSeat){
        mTicketBySeat.GetTicketByIdSeat(idSeat, function(err, rows){
            if(err){
                res.json(err);
            } else {
                let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
                resData.data = rows;
                res.json(resData);
            }
        });  
    } else{
        mTicketBySeat.GetAllSeat(idTrip, function(err, rows){
            if(err){
                res.json(err);
            } else {
                let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
                resData.data = rows;
                res.json(resData);
            }
        });    
    }
});


router.put('/ticketbyseat/update', function(req, res, next){
    var idSeat = req.query.idSeat;
    var status = req.query.status;
    mTicketBySeat.UpdateStatusSeat(idSeat, status, function(err, rows){
        if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
            console.log('row = ' + rows.changedRows);
            
        }
    });

});


/**********************************thinhav: Phan danh cho app lai xe****************************************************************/
/***********************************************************************************************************************************/
var mDriver = require('./api_driver/Driver');
var mCustomer = require('./api_driver/Customer');
// hthinhav: dang nhap 
router.get('/login', function(req, res, next){
    var phone = req.query.phone;
    var password = req.query.password;
    mDriver.validateLogin(phone, password, function(err, rows){
        if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
        }
    });
});

// thinhav: lay thon tin cac chuyen di theo id tai xe
router.get('/getTripByIdDriver', function(req, res, next){
    var idDriver = req.query.idDriver;
    console.log('idDriver = ' + idDriver);
    mDriver.getTripByIdDriver(idDriver, function(err, rows){
        if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
        }
    });
});

// thinhav: lay thong tin khach hang dat ve:
router.get('/customerInfor', function(req, res){
	var idTrip = req.query.idTripByDate;
    mCustomer.getAllCustomerInfor(idTrip, function(err, rows){
        if(err){
            res.json(err);
        } else {
            let resData = responseData.create(Const.successTrue, Const.msgSuccess, Const.resNoErrorCode);
            resData.data = rows;
            res.json(resData);
        }
    });
});

module.exports=router;
