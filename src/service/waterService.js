const globals = require('../globals/globals');

function setWaterData(level){
    if(level) {
        level = level.slice(0, -1);
        globals.waterTankLevel = parseInt(level);
        return 'OK';
    }
    else{
        return 'NOT'
    }
}

module.exports = {
    setWaterData
};