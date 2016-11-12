const PORT = process.env.PORT || 4000
const app = require('express')()

app.get('/', function(req, res){
    let response = {
      ipaddress: req.ip.slice,
      language: req.headers["accept-language"].slice(0,5),
      software: null
    }
    res.send(response);
});

app.listen(PORT, () => console.log('App running on port: ' + PORT))
