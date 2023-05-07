const nodemailer = require("nodemailer")
const config = require("../config.json")

const email = nodemailer.createTransport({
    host: config.smtp.host,
    port: parseInt(config.smtp.port),
    auth: {
      user: config.smtp.auth.user,
      pass: config.smtp.auth.pass
    }
  })

module.exports.email = email