let express = require('express');
let router = express.Router();
let passport = require('passport');

/* GET to landing page */
router.get('/', (req, res)=>{
    res.render('index', {
        user: req.user
    });
});

/* GET inidiviual users page*/
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/users',
        failureRedirect: '/'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;
