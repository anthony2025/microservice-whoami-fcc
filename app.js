const PORT = process.env.PORT || 4000
const app = require('express')()

const ip = require("request-ip")
const accepts = require('accepts')
const useragent = require('express-useragent')

app.use(ip.mw())
app.use(useragent.express())

app.get('/', function(req, res){
    let response = {
      ipaddress: req.clientIp,
      language: accepts(req).languages()[0],
      software: req.useragent.platform + ', ' + req.useragent.os
    }
    res.send(response)
});

app.listen(PORT, () => console.log('App running on port: ' + PORT))
