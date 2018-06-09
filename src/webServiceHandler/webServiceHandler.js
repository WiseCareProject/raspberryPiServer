const webServiceEventsHandler = require('./webServiceEventsHandler');
const foodController = require('../controllers/foodController');
const waterController = require('../controllers/waterController');
const environmentController = require('../controllers/environmentController');
const globals = require('../globals/globals');
const ioreq = require('socket.io-request');

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

};

