module.exports = {
  accessToken: {
    secret: "MYSUPERSECRETACCESSTOKENKEY",
    options: {
      expiresIn: "15m"
    }
  },
  refreshToken: {
    secret: "MYSUPERSECRETREFRESHTOKENKEY",
    options: {
      expiresIn: "7d"
    }
  }
}
