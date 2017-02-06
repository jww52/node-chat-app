const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
      var from = 'Jen';
      var text = 'Some message';
      var message = generateMessage(from, text);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({
        from,
        text
      });
    });
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
      var from = 'Jen';
      var latitude = '30.5';
      var longitude = '150.5';
      var locationMessage = generateLocationMessage(from, latitude, longitude);

      expect(locationMessage.createdAt).toBeA('number');
      expect(locationMessage).toInclude({
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`
      })
  });
});
