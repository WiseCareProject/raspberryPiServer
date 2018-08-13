const globals = require('../globals/globals');
const foodApi = require('../api/feedApi/feedApi');
const waterApi = require('../api/waterApi/waterApi');
const enviromentApi = require('../api/environmentApi/environmentApi');
const cameraApi = require('../api/camera/cameraApi');

function registerDeviceInGlobals(deviceProperties)
{
    if (deviceProperties.device === 'camera'){
        globals.listOfDevices[deviceProperties.device] = "http://" + deviceProperties.ip + ":8080";
        console.log("Device connected "+deviceProperties.device+" "+globals.listOfDevices[deviceProperties.device]);
    }else{
        globals.listOfDevices[deviceProperties.device] = "http://" + deviceProperties.ip + ":80";
        console.log("Device connected "+deviceProperties.device+" "+globals.listOfDevices[deviceProperties.device]);
    }
    return true;
}

async function checkDevicesStatus(){
    let devicesObject = {};

    let foodDeviceStatus = await foodApi.healthCheck();
    let waterDeviceStatus = await waterApi.healthCheck();
    let envDeviceStatus = await enviromentApi.healthCheck();
    let cameraStatus = await cameraApi.healthCheck();

    devicesObject["foodDevice"] = foodDeviceStatus;
    devicesObject["waterDevice"] = waterDeviceStatus;
    devicesObject["environmentDevice"] = envDeviceStatus;
    devicesObject["cameraDevice"] = cameraStatus;

    return devicesObject;
}
module.exports = {
    registerDeviceInGlobals,
    checkDevicesStatus
};