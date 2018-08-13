module.exports = {

    userSettings: {
        uniquePlatformId: '1',
        isAutomated: true,
        maxTemperature: 40,
        lowTemperature: 30,
        defaultAmountOfFood: 80,
        feedingTime: [null]
    },

    foodPlateAmount: 0,
    waterTankLevel: 0,
    foodTankAmount: 0,

    listOfDevices:
        {
            food: 'http://30.30.28.130:80',
            water: 'http://30.30.28.126:80',
            environment: 'http://30.30.22.22:80',
            camera:'http://30.30.32.33:8080'
        }
};
