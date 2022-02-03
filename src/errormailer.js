const { mailer } = require('./mailer');

function format(err) {
  return {
    subject: `[NODEJS FATAL ERROR]`,
    text: `${err.message}\n${err.addMessage||''}\n${err.stack}`
  };
}
async function notify(err) {
  if (process.env.SERVER_ADMIN) {
    const message = format(err);
    message.to = process.env.SERVER_ADMIN;
    await mailer.sendMail(message);
  } else {
    console.log(err);
  }
}

module.exports = {
  notify,
  format
};
