const axios = require('axios');


async function test(res)
{
    try
    {
        const response = await axios.get('http://52.88.92.132:8081/test');
        console.log(response);
        res.send(response.data.status);

    }
    catch(err)
    {
        console.log(err);
    }

}


module.exports= {
  test
};