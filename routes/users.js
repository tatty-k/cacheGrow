let express = require('express');
let router = express.Router();
let usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.show);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

