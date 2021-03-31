const { verify } = require('jsonwebtoken');

const context = require('./context');

jest.mock('jsonwebtoken');

describe('the context function', () => {
  it('should be a function', () => expect(typeof context).toBe('function'));

  describe('the happy path', () => {
    it('should return an object with a token & config', () => {
      const req = {
        headers: {
          'x-access-token': 'USER_PROVIDED_JWT'
        }
      };

      verify.mockReturnValueOnce({
        accessToken: 'ACCESS TOKEN JWT',
        refreshToken: 'REFRESH TOKEN JWT',
        exp: Math.floor(Date.now() / 1000) + 60 // now + 60 seconds
      });

      const result = context({ req });

      expect(result).toHaveProperty('token.accessToken', 'ACCESS TOKEN JWT');
      expect(result).toHaveProperty('token.refreshToken', 'REFRESH TOKEN JWT');
      expect(result).toHaveProperty('token.exp');
      expect(result).toHaveProperty('config');
    });

    it('should return a null value for the token', () => {
      const req = {
        headers: {}
      };

      const result = context({ req });

      expect(result).toHaveProperty('token', null);
    });
  });

  describe('the sad path', () => {
    it('should throw an error when the token is expired', () => {
      const req = {
        headers: {
          'x-access-token': 'USER_PROVIDED_JWT'
        }
      };

      verify.mockReturnValueOnce({
        accessToken: 'ACCESS TOKEN JWT',
        refreshToken: 'REFRESH TOKEN JWT',
        exp: Math.floor(Date.now() / 1000) - 1 // now - 1 second
      });

      expect(() => context({ req })).toThrow('Expired access token!');
    });
  });
});
