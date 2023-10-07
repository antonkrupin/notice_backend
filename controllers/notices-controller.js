const Notice = require('../models/notice');

const getNotices = async (req, res, next) => {
  let notices;
  try {
    notices = await Notice.find();
  } catch (err) {
    console.log(err);
  }

  res.json(notices);
}

const addNotice = async (req, res, next) => {
  const { body, creationDate, id } = req.body;
  const createdNotice = new Notice({
    body,
    creationDate,
  })

  try {
    await createdNotice.save();
  } catch (err) {
    console.log(err);
  }

  res.json(createdNotice);
}

exports.getNotices = getNotices;
exports.addNotice = addNotice;