const usersService = require("../services/users.service");

const trackPlayer = (req, res, next) => {
  try {
    usersService.trackPlayer(req.params.username).then((data) => {
      res.send(data);
    });
  } catch (err) {
    console.error(`Error while tracking user`, err.message);
    next(err);
  }
};

const trackClan = (req, res, next) => {
  try {
    usersService.trackClan(req.params.id).then((data) => {
      res.send(data);
    });
  } catch (err) {
    console.error(`Error while tracking clan`, err.message);
    next(err);
  }
};

const getPlayer = (req, res, next) => {
  try {
    usersService.getPlayer(req.params.username).then((data) => {
      res.send(data);
    });
  } catch (err) {
    console.error(`Error while fetching user`, err.message);
    next(err);
  }
};

const getClan = (req, res, next) => {
  try {
    usersService.getClan(req.params.id).then((data) => {
      res.send(data);
    });
  } catch (err) {
    console.error(`Error while fetching clan`, err.message);
    next(err);
  }
};

module.exports = { trackPlayer, trackClan, getPlayer, getClan };
