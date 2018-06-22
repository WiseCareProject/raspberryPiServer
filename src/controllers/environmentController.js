const globals = require('../globals/globals');
const environentService = require('../service/environmentService');

function turnOnCoolingDevice(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            environentService.turnOnCooling().then((data => {
                if (data)
                {
                    resolove ({status: 'OK'});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

function turnOffCoolingDevice(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            environentService.turnOffCooling().then((data => {
                if (data)
                {
                    resolove ({status: 'OK'});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

function getTemperature(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            environentService.getTemperature().then((data => {
                if (data)
                {
                    resolove ({temp: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

function turnOnHeatDevice(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            environentService.turnOnHeatDevice().then((data => {
                if (data)
                {
                    resolove ({status: 'OK'});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

function turnOffHeatDevice(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            environentService.turnOffHeatDevice().then((data => {
                if (data)
                {
                    resolove ({status: 'OK'});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

module.exports = {
    turnOnCoolingDevice,
    turnOffCoolingDevice,
    getTemperature,
    turnOnHeatDevice,
    turnOffHeatDevice
};