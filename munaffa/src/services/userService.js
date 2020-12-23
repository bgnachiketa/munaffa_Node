const db = require("../db/db");
const moment = require("moment");

module.exports = {
  createUser: async (...args) => {
    try {
      const res = await db.query(
        "INSERT INTO users (email,username,password,created_on) VALUES ($1,$2,$3,$4)",
        [args[0], args[1], args[2], moment(new Date())]
      );
      return {
        res: `Signup Sucessfull for ${args[1]}`,
      };
    } catch (e) {
      return {
        res: e.detail,
      };
    }
  },
  updateUser: async (...args) => {
    try {
      const res = await db.query(
        "UPDATE users SET username=$1,password=$2 where email=$3",
        [args[0], args[1], args[2]]
      );

      if (res.rowCount == 0) {
        return {
          res: `User Does't exist`,
        };
      }
      return {
        res: `User ${args[0]} updated sucessfully`,
      };
    } catch (e) {
      return {
        res: e.detail,
      };
    }
  },
  getUser: async (email) => {
    try {
      console.log(email);
      const res = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      //console.log(res);
      if (res.rowCount == 0) {
        return {
          res: 0,
        };
      }
      return {
        res: res.rows[0],
      };
    } catch (e) {
      return {
        res: e.detail,
      };
    }
  },
  deleteUser: async (email) => {
    try {
      const res = await db.query("DELETE FROM users WHERE email=$1", [email]);
      if (res.rowCount == 0) {
        return {
          res: 0,
        };
      }
      return {
        res: `User Deleted Sucessfully`,
      };
    } catch (e) {
      return {
        res: e,
      };
    }
  },
};
