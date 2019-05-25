let express = require('express');
let router = express.Router();
let usersCtrl = require('../controllers/users');

// add /users in front of every URL.... pretend

// router.get('/', usersCtrl.index);
router.get('/', usersCtrl.show);
/* route to use for connecting goal info to users show page*/
// router.get('goal/new', usersCtrl.show);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

