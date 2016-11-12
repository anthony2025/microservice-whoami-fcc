const PORT = process.env.PORT || 4000
const app = require('express')()

app.get('/', function(req, res){
    let response = {}
    res.send(req.connection.remoteAddress);
});

app.listen(PORT, () => console.log('App running on port: ' + PORT))
