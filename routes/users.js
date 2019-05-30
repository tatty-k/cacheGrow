let express = require('express');
let router = express.Router();
let usersCtrl = require('../controllers/users');

router.get('/', isLoggedIn, usersCtrl.show);

router.post('/', usersCtrl.create);

router.put('/', usersCtrl.update);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

