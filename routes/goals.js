var express = require('express');
var router = express.Router();
let goalsCtrl = require('../controllers/goals');

router.get('/goals/new', goalsCtrl.new);
router.post('/users/:id/goals', goalsCtrl.create);
router.delete('/users/goals/:id', goalsCtrl.delete);
router.get('/users/goals/:id/savings/new', goalsCtrl.show);
router.post('/users/goals/:id/savings', goalsCtrl.createSavings);
router.get('/users/goals/:id/edit', goalsCtrl.edit);

module.exports = router;
