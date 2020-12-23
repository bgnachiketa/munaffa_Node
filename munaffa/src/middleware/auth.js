const jwt = require("jsonwebtoken");

const auth = (req, resp, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return resp.status(403).json({
        msg: "UN-AUTHORISED",
      });
    }
    //Can be read from .env
    jwt.verify(token, "someSecret", (err, user) => {
      console.log(user);
      if (err) {
        resp.status(403).json({
          msg: "UN-AUTHORIZED",
        });
      }
      req.user = user;
    });
    next();
  } catch (e) {
    return resp.status(403).json({
      msg: "UN-AUTHORIZED",
    });
  }
};

module.exports = auth;
