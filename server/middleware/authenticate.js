const { User } = require("./../models/user");

var authenticate = (res, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if(!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch(e => {
    res.status(400).send();
  });
};

module.exports = { authenticate };