const userServices = require("../services/userService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  userSignup: async (req, resp) => {
    console.log(req.body.email, req.body.username, req.body.password);
    try {
      //Encrypt Password
      const encrypted_pass = await bcrypt.hash(req.body.password, 8);
      res = await userServices.createUser(
        req.body.email,
        req.body.username,
        encrypted_pass
      );
      resp.status(201).json({
        msg: res,
      });
    } catch (e) {
      resp.status(400).json({
        msg: e,
      });
    }
  },
  userUpdate: async (req, resp) => {
    try {
      //Password
      const encrypted_pass = await bcrypt.hash(req.body.password, 8);
      res = await userServices.updateUser(
        req.body.username,
        encrypted_pass,
        req.params.email
      );
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(400).json({
        msg: e,
      });
    }
  },
  userLogin: async (req, resp) => {
    try {
      const res = await userServices.getUser(req.body.email);
      console.log(res);

      if (res.res == 0) {
        return resp.status(500).json({
          msg: `UserNotExist or Incorrect Credentials`,
        });
      }
      const valid_usr = await bcrypt.compare(
        req.body.password,
        res.res.password
      );
      if (!valid_usr) {
        resp.status(500).json({
          msg: `UserNotExist or Incorrect Credentials`,
        });
      }
      //Create Session
      const token = await jwt.sign({ email: req.body.email }, "someSecret");
      resp.status(200).json({
        msg: `Login Sucessfull for ${res.res.username}`,
        token: token,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
  userDelete: async (req, resp) => {
    try {
      const res = await userServices.deleteUser(req.body.email);
      //Optional Case
      if (res.res == 0) {
        return resp.status(500).json({
          msg: `UserDoesNotExist`,
        });
      }
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
};
