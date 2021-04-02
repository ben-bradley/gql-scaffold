const { verify } = require('jsonwebtoken');

const getToken = require('./get-token');

jest.mock('jsonwebtoken');

describe('the context function', () => {
  it('should be a function', () => expect(typeof getToken).toBe('function'));

  describe('the happy path', () => {
    it('should return an object with a token & config', () => {
      const headers = {
        'x-access-token': 'USER_PROVIDED_JWT'
      };
      const config = {
        accessToken: {
          secret: 'foobar'
        }
      };

      verify.mockReturnValueOnce({
        accessToken: 'ACCESS TOKEN JWT',
        refreshToken: 'REFRESH TOKEN JWT',
        exp: Math.floor(Date.now() / 1000) + 60 // now + 60 seconds
      });

      const token = getToken(headers, config);

      expect(token).toHaveProperty('accessToken', 'ACCESS TOKEN JWT');
      expect(token).toHaveProperty('refreshToken', 'REFRESH TOKEN JWT');
      expect(token).toHaveProperty('exp');
    });

    it('should return a null value for the token', () => {
      const headers = {};
      const config = {
        accessToken: {
          secret: 'foobar'
        }
      };

      const token = getToken(headers, config);

      expect(token).toBe(null);
    });
  });

  describe('the sad path', () => {
    it('should throw an error when the token is expired', () => {
      const headers = {
        'x-access-token': 'USER_PROVIDED_JWT'
      };
      const config = {
        accessToken: {
          secret: 'foobar'
        }
      };

      verify.mockReturnValueOnce({
        accessToken: 'ACCESS TOKEN JWT',
        refreshToken: 'REFRESH TOKEN JWT',
        exp: Math.floor(Date.now() / 1000) - 1 // now - 1 second
      });

      expect(() => getToken(headers, config)).toThrow('Expired access token!');
    });
  });
});
