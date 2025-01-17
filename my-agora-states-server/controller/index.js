const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const requestedId = Number(req.params.id);
    const filteredDiscussion = discussionsData.filter((element) => element.id === requestedId);
    if (filteredDiscussion.length === 0) {
      return res.status(404).end();
    }
    return res.status(200).send(filteredDiscussion[0]);
  },
  create: (req, res) => {
    const id = discussionsData[0].id + 1;
    const { createdAt, title, url, author, text, answer, avatarUrl, notice } = req.body;

    discussionsData.unshift({ id, createdAt, title, url, author, text, answer, avatarUrl, notice });
    return res.status(201).send("submit succeed!");
  },
};

module.exports = {
  discussionsController,
};

