const { sign } = require('jsonwebtoken');

const generateTokens = require('./generateTokens');

jest.mock('jsonwebtoken');

describe('the generateTokens util', () => {
  it('should export a function', () => expect(typeof generateTokens).toBe('function'));

  it('should return an object with accessToken & refreshToken properties', () => {
    const user = {
      username: 'user.username'
    };
    const config = {
      accessToken: {
        secret: 'config.accessToken.secret',
        options: 'config.accessToken.options'
      },
      refreshToken: {
        secret: 'config.refreshToken.secret',
        options: 'config.refreshToken.options'
      }
    };

    sign.mockReturnValue('A JWT');

    const result = generateTokens(user, config);

    expect(result).toHaveProperty('accessToken', 'A JWT');
    expect(result).toHaveProperty('refreshToken', 'A JWT');
    expect(sign).toHaveBeenCalledWith(
      { username: 'user.username' },
      'config.accessToken.secret',
      'config.accessToken.options'
    );
    expect(sign).toHaveBeenCalledWith(
      { username: 'user.username' },
      'config.refreshToken.secret',
      'config.refreshToken.options'
    );
  });
});
