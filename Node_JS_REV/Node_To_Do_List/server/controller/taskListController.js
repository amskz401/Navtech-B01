const taskListModel = require("../model/taskList");

const allTasks = (req, res) => {
  const taskList = taskListModel.find({ user_id: req.session.user._id });
  taskList.then((data) => {
    const newTasks = data.filter((data) => data.status == "new");
    const progTasks = data.filter((data) => data.status == "progress");
    const compTasks = data.filter((data) => data.status == "completed");

    const pageTitle = "List Page";
    res.render("list", { newTasks, progTasks, compTasks, pageTitle });
  });
};

const addTask = (req, res) => {
  req.body = { ...req.body, user_id: req.session.user._id };
  const newTask = new taskListModel(req.body);
  newTask.save().then((lastRec) => {
    console.log(lastRec);
    res.redirect("/list");
  });
};

const changeStatus = (req, res) => {
  taskListModel
    .updateOne(req.params, {
      $set: {
        status: "progress",
      },
    })
    .then((getRec) => {
      console.log(getRec);
      res.redirect("/list");
    });
};

const toCompleted = (req, res) => {
  taskListModel
    .updateOne(req.params, {
      $set: {
        status: "completed",
      },
    })
    .then((getRec) => {
      console.log(getRec);
      res.redirect("/list");
    });
};

const toDeleted = (req, res) => {
  taskListModel.deleteOne(req.params).then((getRec) => {
    console.log(getRec);
    res.redirect("/list");
  });
};

module.exports = { addTask, allTasks, changeStatus, toCompleted, toDeleted };
