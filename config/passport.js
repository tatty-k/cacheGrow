let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;
let User = require('../models/user');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    }, function(accessToken, refreshToken, profile, cb){
        User.findOne({googleId: profile.id}, function(err, user){
            if(err) return cb(err);
            if (user){
                // returning user
                return cb(null, user);
            } else {
                // brand new user
                let newUser = new User({
                    name: profile.displayName,
                    googleId: profile.id
                });
                newUser.save(function(err){
                    if(err) return eb(err); 
                    return cb(null, newUser);
                })
            }

        })
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});