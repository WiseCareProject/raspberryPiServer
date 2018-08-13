const globals = require('../globals/globals');
const cameraApi = require('../api/camera/cameraApi');

async function getSnapShot()
{
    try
    {
        let data = await cameraApi.getSnap();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

module.exports = {
    getSnapShot
};