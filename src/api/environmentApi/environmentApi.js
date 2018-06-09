const axios = require('axios');
const globals = require('../../globals/globals');

function turnOnCooling()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.environment+'/turnOnVent').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });


}

function turnOffCooling()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.environment+'/turnOffVent').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });


}

function getTemperature()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.environment+'/tempStatus').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });
}

function turnOnHeat()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.environment+'/turnOnBlanket').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });
}

function turnOffHeat()
{
    return new Promise((resolve,reject)=>{

        axios.get(globals.listOfDevices.environment+'/turnOffBlanket').then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });
}

module.exports = {
    turnOnCooling,
    turnOffCooling,
    getTemperature,
    turnOnHeat,
    turnOffHeat
};