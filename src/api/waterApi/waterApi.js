const axios = require('axios');
const globals = require('../../globals/globals');

function getWaterLevel()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.water+'/waterTankAmount').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });


}

function getFloatingStatus()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.water+'/waterStatus').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });


}

function fillWaterTank()
{
    return new Promise((resolve,reject)=>{
        console.log('got here');
        axios.get(globals.listOfDevices.water+'/fillWaterCommand').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });
}

function healthCheck(){
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.water+'/healthCheck',{timeout:1000}).then(response=>{
            resolve(response.data);
        }).catch(err=>{
            resolve("error");
        })
    });
}

module.exports= {
    getWaterLevel,
    getFloatingStatus,
    fillWaterTank,
    healthCheck
};