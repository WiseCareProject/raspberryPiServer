const globals = require('../globals/globals');
const waterApi = require('../api/waterApi/waterApi');

async function getWaterData()
{
    try
    {
        let data = await waterApi.getWaterLevel();
        return data;
        console.log(data);
    }
    catch (err)
    {
        console.error(err);
    }
}

async function getFloatingStatus()
{
    try
    {
        let data = await waterApi.getFloatingStatus();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}


async function fillWaterTank()
{
    try
    {
        let data = await waterApi.fillWaterTank();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

module.exports = {
    getFloatingStatus,
    getWaterData,
    fillWaterTank
};