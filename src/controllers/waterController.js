const waterService = require('../service/waterService');

function getWaterDistanceLevel(socket)
{
    return new Promise((resolve,reject)=>{
        if(socket.connected)
        {
            waterService.getWaterData().then((data => {
                if (data)
                {
                    resolve ({amount: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });
}

function getFloatingStatus(socket)
{
    return new Promise((resolve,reject)=>{
        if(socket.connected)
        {
            waterService.getFloatingStatus().then((data => {
                if (data)
                {
                    resolve ({amount: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });
}

function fillWaterTank(socket)
{
    return new Promise((resolve,reject)=>{
        if(socket.connected)
        {
            waterService.fillWaterTank().then((data => {
                if (data)
                {
                    resolve ({status: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });
}



module.exports =
    {
        getWaterDistanceLevel,
         getFloatingStatus,
        fillWaterTank
};