const waterService = require('../service/waterService');

function getWaterLevel(req,res)
{
    let level = req.query.level;
    let ack = waterService.setWaterData(level);

        if(ack=="OK")
        {
            res.send('waterUpdated').end();
        }
        else
        {
            res.send('waterNotUpdated').end();
        }
}

function getFloatingStatus(req,res)
{
    let status = "";
    console.log(req.query.float);
    res.send("hey");
}

module.exports =
    {
    getWaterLevel,
    getFloatingStatus
};