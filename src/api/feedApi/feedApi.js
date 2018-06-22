const axios = require('axios');
const globals = require('../../globals/globals');

function feed()
{
    return new Promise((resolve,reject)=>{

    axios.get(globals.listOfDevices.food+'/feed?amount='+globals.userSettings.defaultAmountOfFood).then(response=>{
        resolve(response.data);
    }).catch(err=>{
        reject(err);
    })
});


}

function getTankAmount()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.food+'/tankAmount').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });


}

function getPlateAmount()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.food+'/scale').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });


}
function healthCheck(){
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.food+'/healthCheck',{timeout:1000}).then(response=>{
            resolve(response.data);
        }).catch(err=>{
            resolve("error");
        })
    });
}

function stopServo(){
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.food+'/stopServo').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            resolve("error");
        })
    });
}

module.exports= {
    feed,
    getTankAmount,
    getPlateAmount,
    healthCheck,
    stopServo
};