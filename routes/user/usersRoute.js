const express =  require('express');
const router = express.Router();

const userControllers = require('../../controller/mssql/userControllers');

router.get('/',userControllers.LogIn);

module.exports = router;