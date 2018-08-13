const axios = require('axios');
const globals = require('../../globals/globals');
const fs = require('fs');
const Path = require('path');

async function getSnap()
{
    const url = globals.listOfDevices.camera+'/getSnap';
    const path = Path.resolve(__dirname,'images','snap.jpg');
    const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(path));

    return new Promise ((resolve,reject)=>{
       response.data.on('end',()=>{

           resolve(response.data);
       });

       response.data.on('error',()=>{
           reject();
       })
    });

}

function healthCheck(){
    return new Promise((resolve,reject)=>{
        axios.get(globals.listOfDevices.camera+'/healthCheck',{timeout:1000}).then(response=>{
            resolve(response.data);
        }).catch(err=>{
            resolve("error");
        })
    });
}


module.exports = {
    getSnap,
    healthCheck
};