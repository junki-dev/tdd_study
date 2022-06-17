// api 로직
const models = require("../../models");

const index = function (req, res) {
  const limit = parseInt(req.query.limit || 10, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  models.User.findAll({
    limit,
  }).then((users) => {
    res.json(users);
  });

  //   res.send(users.slice(0, limit));
};

const show = function (req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  models.User.findOne({ where: { id } }).then((user) => {
    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });

  // const user = users.filter((user) => user.id === id)[0];
  // if (!user) {
  //   return res.status(404).end();
  // }

  // res.json(user);
};

const destroy = function (req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  models.User.destroy({ where: { id } }).then(() => {
    res.status(204).end();
  });

  // users = users.filter((user) => user.id !== id);
  // res.status(204).end();
};

const create = (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).end();
  }

  models.User.create({ name })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      if (err.name === "SequelizeUniqueConstraintError") {
        return res.status(409).end();
      }

      return res.status(500).end();
    });

  // const isConflict = users.filter((user) => user.name === name).length;
  // if (isConflict) {
  //   return res.status(409).end();
  // }

  // const id = Date.now();
  // const user = { name, id };
  // users.push(user);
  // res.status(201).json(user);
};

const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  const name = req.body.name;
  if (!name) {
    return res.status(400).end();
  }

  models.User.findOne({ where: { id } }).then((user) => {
    if (!user) {
      return res.status(404).end();
    }

    user.name = name;
    user
      .save()
      .then(() => {
        res.json(user);
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError") {
          return res.status(409).end();
        }
      });
  });

  // const isConflict = users.filter((user) => user.name === name).length;
  // if (isConflict) {
  //   return res.status(409).end();
  // }

  // const user = users.filter((user) => user.id === id)[0];
  // if (!user) {
  //   return res.status(404).end();
  // }

  // user.name = name;

  // res.json(user);
};

module.exports = {
  index,
  show,
  destroy,
  create,
  update,
};
