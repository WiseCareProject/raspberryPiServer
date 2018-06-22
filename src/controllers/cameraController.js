const cameraService = require('../service/cameraService');

function getSnapShot(socket)
{
    return new Promise((resolove,reject)=>{
        if(socket.connected)
        {
            cameraService.getSnapShot().then((data => {
                if (data)
                {
                    resolove (data);
                }
            })).catch((err) => {
                reject (err);
            });
        }
    });

}

module.exports = {
    getSnapShot
};