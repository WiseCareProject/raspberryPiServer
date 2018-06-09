const express = require('express');
const app = express();
const port = 3000;
const io = require('socket.io-client');
const socket = io('http://192.168.1.25:3001',{
    path:'/wiseCarePlatform',
    transports:['websocket']
});

const webServiceHandler = require('./src/webServiceHandler/webServiceHandler')(socket);


app.get('/health', (req, res) =>
{
    res.send('hello world!!');
});

require('./src/routes/feedingRoutes/feedingRoutes')(app);
require('./src/routes/drinkingRoutes/drinkingRoutes')(app);

app.listen(`${port}`, () => console.log(`listening on port ${port}`));

