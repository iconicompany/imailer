const { format } = require('../src/errormailer');

test('format', async () => {
  const result = format(new Error('test'));
  expect(result.subject).toStrictEqual('[NODEJS FATAL ERROR]');
});
