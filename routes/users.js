var express = require('express');
let PlayerModel = require('../model/player');
let UserOkResponse = require('../dto/UserResponse');
var router = express.Router();

/* GET users listing. */
router.get('/check', function(req, res, next) {

});

router.post('/save', function(req, res, next) {
  PlayerModel.create(req.body, function (err, awesome_instance) {
    if (err) return res.send(500,err);
    
    return res.send(200,new UserOkResponse(awesome_instance._id,awesome_instance._id.name,null,awesome_instance.status));
  });
});





module.exports = router;
