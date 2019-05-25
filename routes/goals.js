var express = require('express');
var router = express.Router();
let goalsCtrl = require('../controllers/goals');

router.get('/goals/new', goalsCtrl.new);
router.post('/users/:id/goals', goalsCtrl.create);


module.exports = router;
