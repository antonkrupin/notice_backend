const Notice = require('../models/notice');

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

exports.addNotice = addNotice;