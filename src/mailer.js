const nodemailer = require('nodemailer');

const mailerconfig = process.env.MAIL_URL || {
  sendmail: true,
  path: process.env.MAIL_COMMAND || '/usr/sbin/sendmail'
};
const mailer = nodemailer.createTransport(mailerconfig);

module.exports = {
  mailerconfig,
  mailer
};
