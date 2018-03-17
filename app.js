const express = require('express');
const app = express();
const port = 3000;


app.get('/health', (req, res) =>
{
    res.send('hello world!!');
});

require('./src/routes/feedingRoutes/feedingRoutes')(app);
require('./src/routes/drinkingRoutes/drinkingRoutes')(app);

app.listen(`${port}`, () => console.log(`listening on port ${port}`));

