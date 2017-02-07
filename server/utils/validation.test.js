const expect = require('expect');

const {isRealString} = require('./validation');

//isRealString
describe('isRealString', () => {
  it('should reject non-string values', () => {
    var nonString = isRealString(342)
    expect(nonString).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var spaceString = isRealString('   ');
    expect(spaceString).toBe(false);
  });
  it('should allow strings with non-space characters', () => {
    var realString = isRealString('Lord of the Rings');
    expect(realString).toBe(true);
  })

});

//should reject non-string values
//pass non-string value and expect false
//should reject string with only spaces -false
//should allow strings with non-space characters -
