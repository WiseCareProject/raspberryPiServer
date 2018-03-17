
module.exports = (app) =>{
    app.get('/feedNow',(req,res)=>{
       res.send('hey');
    });
    app.get('/updateFoodAmount',(req,res)=>{
        console.log(req.query.amount);
        res.send('OK');
    });
};