const { mailer } = require('../src/mailer');

const ifsetMailUrl = process.env.MAIL_URL ? describe : describe.skip;
ifsetMailUrl('MAIL_URL test', () => {
  test('MAIL_URL sendMail', async () => {
    if (process.env.SERVER_ADMIN) {
      const message = {
        from: process.env.MAIL_FROM,
        to: process.env.SERVER_ADMIN,
        subject: 'TEST SUBJECT',
        text: 'TEST BODY'
      };
      message.to = process.env.SERVER_ADMIN;
      const res = await mailer.sendMail(message);
      expect(res.accepted).toStrictEqual([process.env.SERVER_ADMIN]);
    }
  });
});
