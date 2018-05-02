const connection = require('./../db_connect');

const addUser = (username, email, password, firstName, lastName) => {
  const sql = {
    text: 'INSERT INTO users (user_name, email, password, first_name, last_name) VALUES ($1, $2, $3 ,$4, $5)',
    values: [username, email, password, firstName, lastName],
  };
  return connection.query(sql);
};

module.exports = addUser;
