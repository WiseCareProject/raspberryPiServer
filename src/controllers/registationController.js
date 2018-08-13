const registrationService = require('../service/registrationService');
function register(req, res) {
    let deviceProperties = {};
    deviceProperties.ip = req.query.ip;
    deviceProperties.device = req.query.device;
    registrationService.registerDeviceInGlobals(deviceProperties);
    res.status(200).send('OK');
}

function checkDevicesStatus(socket){
    if(socket.connected) {
        return new Promise((resolve,reject)=>{
            registrationService.checkDevicesStatus().then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        });
    }
}

module.exports = {
    register,
    checkDevicesStatus
};