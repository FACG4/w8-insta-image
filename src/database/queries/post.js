const connection = require('./../db_connect');

// const addUser = (username, email, password, firstName, lastName) => {
//   const sql = {
//     text: 'INSERT INTO users (user_name, email, password, first_name, last_name) VALUES ($1, $2, $3 ,$4, $5)',
//     values: [username, email, password, firstName, lastName],
//   };
//   return connection.query(sql);
// };

const addUser = (username, email, password, firstName, lastName, cb) => {
  const sql = {
    text: 'INSERT INTO users (user_name, email, password, first_name, last_name) VALUES ($1, $2, $3 ,$4, $5)',
    values: [username, email, password, firstName, lastName],
  };
  return connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const getUserData = (username, cb) => {
  const sql = {
    text: 'SELECT * FROM users WHERE username = $1',
    values: [username],
  };
  return connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = { addUser, getUserData };
