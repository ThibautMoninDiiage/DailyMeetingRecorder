var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/userModel');

passport.use(new JwtStrategy({
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async function(jwtPayload, done) {
  const user = await User.findOne({
     where: { 
       id: jwtPayload.sub,
       username: jwtPayload.username,
       email: jwtPayload.email 
      } 
    }
  );
  if (user) {
    return done(null, user);
  }
}));