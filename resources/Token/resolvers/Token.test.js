const Token = require('./Token');

const mockToken = {
  accessToken: 'mockToken.accessToken',
  refreshToken: 'mockToken.refreshToken'
};

describe('the Token resolver', () => {
  it('should export an object with properties', () => {
    expect(Token).toHaveProperty('accessToken');
    expect(Token).toHaveProperty('refreshToken');
  });

  describe('the accessToken resolver', () => {
    it('the accessToken resolver', () =>
      expect(Token.accessToken(mockToken)).toBe('mockToken.accessToken'));
  });

  describe('the refreshToken resolver', () => {
    it('the refreshToken resolver', () =>
      expect(Token.refreshToken(mockToken)).toBe('mockToken.refreshToken'));
  });
});
