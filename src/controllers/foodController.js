const globals = require('../globals/globals');
const foodService = require('../service/foodService');


function feedNow(socket)
{
    if(socket.connected)
    {
        let currentPlate = globals.userSettings.defaultAmountOfFood;
        foodService.feedNow().then((data => {
            if (data)
            {
                return ({status: data});
            }
        })).catch((err) => {
            return err;
        });
    }
}
function getPlateAmount(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            foodService.getPlateAmount().then((data => {
                if (data)
                {
                    resolove ({status: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

function getTankAmount(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            foodService.getTankAmount().then((data => {
                if (data)
                {
                    resolove ({status: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });
}

function stopServo(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            foodService.stopServo().then((data => {
                if (data)
                {
                    resolove ({status: data});
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });
}


module.exports = {
        feedNow,
        getTankAmount,
        getPlateAmount,
        stopServo
};