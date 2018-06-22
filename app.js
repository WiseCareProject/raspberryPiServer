const express = require('express');
const app = express();
const port = 3000;
const io = require('socket.io-client');
const socket = io('http://52.38.156.227:3001',{  //52.38.156.227:3001
    path:'/wiseCarePlatform',
    transports:['websocket']
});
require('./src/routes/registrationRoutes/registrationRoutes')(app);
require('./src/webServiceHandler/webServiceHandler')(socket);

app.get('/health', (req, res) =>
{
    res.send('hello world!!');
});

app.listen(`${port}`, () => console.log(`listening on port ${port}`));

