const globals = require('../globals/globals');
const environmentApi = require('../api/environmentApi/environmentApi');

async function turnOnCooling()
{
    try
    {
        let data = await environmentApi.turnOnCooling();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function turnOffCooling()
{
    try
    {
        let data = await environmentApi.turnOffCooling();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function getTemperature()
{
    try
    {
        let data = await environmentApi.getTemperature();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function turnOnHeatDevice()
{
    try
    {
        let data = await environmentApi.turnOnHeat();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function turnOffHeatDevice()
{
    try
    {
        let data = await environmentApi.turnOffHeat();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

module.exports = {
    turnOnCooling,
    turnOffCooling,
    getTemperature,
    turnOnHeatDevice,
    turnOffHeatDevice
};



