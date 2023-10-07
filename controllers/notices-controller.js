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

const deleteNoticeById = async (req, res, next) => {
  const noticeId = req.params.noticeId;
  let notice;
  try {
    notice = await Notice.findById(noticeId);
  } catch (err) {
    console.log(err);
  }

  try {
    notice.deleteOne();
  } catch (err) {
    console.log(err);
  }

  res.json('notice deleted');
}

exports.getNotices = getNotices;
exports.addNotice = addNotice;
exports.deleteNoticeById = deleteNoticeById;