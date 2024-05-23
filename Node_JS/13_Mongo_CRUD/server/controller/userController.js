const userModel = require("../../server/model/userSchema");

// Get ALl Records
let getAllUsers = async (req, res) => {
  let count = await userModel.find();
  return count.length;
};

// Find Record
module.exports.findRecord = (req, res) => {
  console.log(req.params);
  res.send(true);
  // userModel.find(req.params).then((rec) => {
  //   res.send(rec);
  // });
};

// Get ALl Records
module.exports.getUsers = async (req, res) => {
  let totalCount = await getAllUsers();

  let limit = 10;
  let skip = 0;
  if (req.params.limit != 0) {
    limit = req.params.limit;
  }

  if (req.params.skip != 0) {
    skip = req.params.skip * limit;
  }

  userModel
    .find()
    .skip(skip)
    .limit(limit)
    .sort({ id: -1 })
    .then((data) => {
      res.send({ totalCount: totalCount, userData: data });
      // res.render("home", { userData: data });
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
      res.send(true);
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
