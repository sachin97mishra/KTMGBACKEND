const bodyParser = require('body-parser');
const express = require('express');
const UserRoute = require('./routes/user/usersRoute');

const app = express();

app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
    next();  
});  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//BaseSyncItemMaster.BaseSyncItemMaster();
// SyncPOMasterData.SyncPOMasterData();
// SyncGOMasterData.SyncGOMasterData();
//Here we will enable CORS, so that we can access api on cross domain.  



app.use('/api/login/', UserRoute)





//// Error Handelling Start...
app.use((error, req, res, next) => {
    if (req.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'Something Went wrong.' })
})
//// Error Handelling End...

app.listen(5000, () => {
    console.log('Server is running')
})













