const db = require("../db/db");
const moment = require("moment");

module.exports = {
  createProduct: async (...args) => {
    try {
      const res = await db.query(
        "INSERT INTO products (id,name,price,belongsto,created_on,updated_at) VALUES ($1,$2,$3,$4,$5,$6)",
        [
          args[0],
          args[1],
          args[2],
          args[3],
          moment(new Date()),
          moment(new Date()),
        ]
      );
      return {
        res: `Succesfully added ${args[1]}`,
      };
    } catch (e) {
      return {
        res: e.detail,
      };
    }
  },
  updateProduct: async (...args) => {
    try {
      const res = await db.query(
        "UPDATE products SET name=$1,price=$2,updated_at=$3 where id=$4",
        [args[0], args[1], moment(new Date()), args[2]]
      );

      if (res.rowCount == 0) {
        return {
          res: `Product Doest Exist`,
        };
      }
      return {
        res: `Product ${args[0]} updated sucessfully`,
      };
    } catch (e) {
      return {
        res: e.detail,
      };
    }
  },
  /*select * from products p inner join users u on u.email = p.belongsto where u.email = 'nachiketabg@gmail.com'; OR
    select * from products where belongsto='nachiketabg@gmail.com*/
  getAllProduct: async (...args) => {
    try {
      const res = await db.query(
        "SELECT * FROM products p INNER JOIN users u on u.email = p.belongsto WHERE u.email=$1",
        [args[0]]
      );
      console.log(res);
      if (res.rowCount == 0) {
        return {
          res: `Products Doest Exist. Instead Create One!!`,
        };
      }
      if (res.rowCount == 1) {
        return {
          res: res.rows[0],
        };
      }
      return {
        res: res.rows,
      };
    } catch (e) {
      return { res: e.detail };
    }
  },
  getProduct: async (...args) => {
    try {
      console.log("HII");
      const res = await db.query("SELECT * FROM products where id=$1", [
        args[0],
      ]);
      if (res.rowCount == 0) {
        return {
          res: `Product Doest Exist`,
        };
      }
      return {
        res: res.rows[0],
      };
    } catch (e) {
      return { res: e.detail };
    }
  },
  deleteProduct: async (...args) => {
    try {
      const res = await db.query("DELETE FROM products where id=$1", [args[0]]);
      console.log(res);
      if (res.rowCount == 0) {
        return {
          res: `Product Doest Exist`,
        };
      }
      return {
        res: "Succesfully deleted",
      };
    } catch (e) {
      return { res: e.detail };
    }
  },
  deleteAllProducts: async (...args) => {
    try {
      console.log("HII");
      const res = await db.query("DELETE FROM products where belongsto=$1", [
        args[0],
      ]);
      if (res.rowCount == 0) {
        return {
          res: `Products Doest Exist for the ${args[0]}`,
        };
      }
      return {
        res: `Succesfully deleted`,
      };
    } catch (e) {
      return { res: e.detail };
    }
  },
};
