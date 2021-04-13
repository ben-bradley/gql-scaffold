module.exports = {
  server: {
    port: 4000
  },
  auth: {
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
}
