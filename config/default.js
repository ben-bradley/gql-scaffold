module.exports = {
  accessToken: {
    secret: "MYSUPERSECRETACCESSTOKENKEY",
    options: {
      expiresIn: "1d"
    }
  },
  refreshToken: {
    secret: "MYSUPERSECRETREFRESHTOKENKEY",
    options: {
      expiresIn: "7d"
    }
  }
}
