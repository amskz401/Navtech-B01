const userModel = require("../model/user");

const registerUser = (req, res) => {
  const newUser = new userModel(req.body);
  newUser.save().then((lastRec) => {
    console.log(lastRec);
    res.redirect("/");
  });
};

const loginUser = (req, res) => {
  userModel.findOne(req.body).then((user) => {
    if (user) {
      req.session.regenerate((err) => {
        if (err) next(err);
        req.session.user = user;

        req.session.save((err) => {
          if (err) next(err);
          console.log(req.session);
          res.redirect("/list");
          return true;
        });
      });
    } else {
      res.redirect("/");
      return true;
    }
  });
};

module.exports = { registerUser, loginUser };
