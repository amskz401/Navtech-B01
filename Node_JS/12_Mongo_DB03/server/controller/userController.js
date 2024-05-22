const userModel = require("../../server/model/userSchema");

// Get ALl Records
module.exports.getUsers = (req, res) => {
  userModel
    .find()
    .then((data) => {
      res.render("home", { userData: data });
    })
    .catch((error) => {
      res.send(error.message);
    });
};

// Add A New Record
module.exports.addUser = (req, res) => {
  let newUser = userModel(req.body);
  newUser
    .save()
    .then((insertedRec, error) => {
      res.send(insertedRec);
    })
    .catch((error) => {
      console.log(error);
      res.send(error.message);
    });
};

// Delete Record
module.exports.deleteUser = (req, res) => {
  userModel
    .deleteOne(req.params)
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => {
      res.send(error.message);
    });
};

// Update Record
module.exports.updateUser = (req, res) => {
  userModel
    .updateOne(req.params, { $set: req.body })
    .then((rec) => {
      res.send(rec);
    })
    .catch((error) => {
      res.send(error.message);
    });
};
