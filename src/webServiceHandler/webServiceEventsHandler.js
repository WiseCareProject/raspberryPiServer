const globals = require('../globals/globals');

function saveUserSettings(socket,settings)
{
    globals.userSettings = settings;
    console.log(globals.userSettings);
    socket.emit('userSettingsAck',{userSettingsAck:"Saved"});
}

module.exports={
    saveUserSettings
};