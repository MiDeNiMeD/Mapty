const accountSid = 'AC0e8e6eb4fcc4de8454381da72ca3e269';
const authToken = '53cfc62d6a8252c54b5cdae13c7cdec4';
const client = require('twilio')(accountSid, authToken);

client.messages
.create({
  body: 'ð hi Mideni ð some one ð¨âð» ð©âð»have the access and logged into your website ð¥ï¸ ',
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+21624905669',
})
.then(message => console.log(message.sid))
.done();

console.log('done');