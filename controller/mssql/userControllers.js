// var _sqlPackage = require("mssql");
//const dbConfig = require('../../connection/sqlconn');
const HttpError = require('../../models/httpErrorModel');


//To parse result in json format  
///// For login /////                                    
const LogIn = async function (_req, Response, next) {
        
    Response.status(200)
    Response.send("{YES:MESSAGE}");


    // const con = new _sqlPackage.ConnectionPool(dbConfig);
    // try {
    //     await con.connect().then(pool => {
    //         // Stored procedure                
    //         //_req.query.password
    //         return pool.request()
    //             .input('userid', _sqlPackage.VarChar(40), _req.body.parms.userid)
    //             .input('password', _sqlPackage.VarChar(40), _req.body.parms.pass)
    //             .execute("sapportallogin")
    //     }).then((recordsets, returnValue) => {            
    //         Response.json(recordsets);
    //     }).catch(err => {
    //         // ... error checks            
    //         console.log("Something Went Wrong :- " + err);
    //         Response.status(404)
    //         Response.send(err);
    //     })
    // }
    // finally {
    //     con.close();
    // }
};




exports.LogIn = LogIn;