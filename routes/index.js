var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/getplaces',function(req,res) {
    console.log('in get places');
    var fs = require('fs');
    fs.readFile(__dirname + '/places.dat.txt',function(err,data) {
        if(err) throw err;
        var places = data.toString().split("\n");
//        console.log(places);
        var jsonresult = [];
        for(var i = 0; i < places.length; i++) {
//                console.log("places[i]", places[i]);
                jsonresult.push({place:places[i]});
//            console.log(places[i]);
        }
//                console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});

module.exports = router;
