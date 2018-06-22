const globals = require('../globals/globals');
const feedApi = require('../api/feedApi/feedApi');

function setPlateAmountData(plateAmount)
{
    if(plateAmount)
    {
        plateAmount = plateAmount.slice(0, -1);
        globals.foodPlateAmount = parseInt(plateAmount);
        return 'plateAmountOK';
    }
    else
    {
        return 'NOT'
    }
}

async function feedNow()
{
    try
    {
        let data = await feedApi.feed();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function getTankAmount()
{
    try
    {
        let data = await feedApi.getTankAmount();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function getPlateAmount()
{
    try
    {
        let data = await feedApi.getPlateAmount();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function stopServo()
{
    try
    {
        let data = await feedApi.stopServo();
        return data;
    }
    catch (err)
    {
        console.error(err);
    }
}

module.exports = {
    feedNow,
    getTankAmount,
    getPlateAmount,
    stopServo
};