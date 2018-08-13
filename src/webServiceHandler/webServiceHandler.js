const webServiceEventsHandler = require('./webServiceEventsHandler');
const foodController = require('../controllers/foodController');
const waterController = require('../controllers/waterController');
const environmentController = require('../controllers/environmentController');
const registrationController = require('../controllers/registationController');
const cameraController = require('../controllers/cameraController');
const globals = require('../globals/globals');
const ioreq = require('socket.io-request');
const iostr = require('socket.io-stream');
const stream = iostr.createStream();
const fs = require('fs');

module.exports = (socket)=> {

    socket.on('connect',()=>{
    console.log('connected');
    });

    socket.on('connect_error',(err)=> {
    console.error(err);
    });

    socket.on('connect_timeout',(err)=> {
    console.log('timeout');
    console.log(err);
    });

    socket.on('userSettings',(data)=>{
        webServiceEventsHandler.saveUserSettings(socket,data);
    });


    ioreq(socket).response('feed',(req,res)=>{
       let data =  foodController.feedNow(socket);
            res(data);
    });

    ioreq(socket).response('getPlateAmount',(req,res)=>{
        foodController.getPlateAmount(socket).then(data=>{
            res(data);
        });

    });

    ioreq(socket).response('foodTankAmount',(req,res)=>{
        foodController.getTankAmount(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('stopServo',(req,res)=>{
        foodController.stopServo(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('waterTankDistanceStatus',(req,res)=>{
        waterController.getWaterDistanceLevel(socket).then(data=>{
            res(data);
        });

    });

    ioreq(socket).response('waterTankFloatStatus',(req,res)=>{
       waterController.getFloatingStatus(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('fillWaterTank',(req,res)=>{
        waterController.fillWaterTank(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('register',(req,res)=>{
        console.log(req);
        globals.listOfDevices[req.device] = 'http://'+req.ip+":80";
        console.log(globals);
        res('OK');
    });

    ioreq(socket).response('turnOnCooling',(req,res)=>{
        environmentController.turnOnCoolingDevice(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('turnOffCooling',(req,res)=>{
        environmentController.turnOffCoolingDevice(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('getTemperature',(req,res)=>{
        environmentController.getTemperature(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('turnOnHeat',(req,res)=>{
        environmentController.turnOnHeatDevice(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('turnOffHeat',(req,res)=>{
        environmentController.turnOffHeatDevice(socket).then(data=>{
            res(data);
        });
    });

    ioreq(socket).response('devicesStatus',(req,res)=>{
        registrationController.checkDevicesStatus(socket).then(data=>{
            res(data);
        });
    });

    // ioreq(socket).response('getSnap',(req,res)=>{
    //     cameraController.getSnapShot(socket).then(data=>{
    //         res(data);
    //     });
    // });

    iostr(socket).on('getSnap',function (stream){
        cameraController.getSnapShot(socket).then(data=>{
            return fs.createReadStream(`${__dirname}/../api/camera/images/snap.jpg`).pipe(stream);
                });
    });
};

