const trackPlayer = (username) => {
  return Promise.resolve(username);
};

const trackClan = async (clanName) => {
  return Promise.resolve(clanName);
};

const getPlayer = async (username) => {
  return Promise.resolve(username);
};

const getClan = async (id) => {
  return Promise.resolve(id);
};

module.exports = { trackPlayer, trackClan, getPlayer, getClan };
