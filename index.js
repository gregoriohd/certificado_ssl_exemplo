const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("Olá, certificado SSL funcionando!");
});

//fs.accessSync("server.key", fs.constants.R_OK);
const opt = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
    passphrase: '123456'
}

https.createServer(opt, app).listen(3000);