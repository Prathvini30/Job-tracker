// controllers/stats.js
const mongoose = require('mongoose')
const { StatusCodes } = require('http-status-codes')
const Job = require('../models/Job')

const getStats = async (req, res) => {
  const { userId } = req.user

  const stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ])

  const formattedStats = {
    pending: 0,
    interview: 0,
    declined: 0,
  }

  stats.forEach((item) => {
    formattedStats[item._id] = item.count
  })

  res.status(StatusCodes.OK).json({ stats: formattedStats })
}

module.exports = { getStats }
