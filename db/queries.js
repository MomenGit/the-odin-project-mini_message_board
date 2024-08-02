const pool = require('./pool');

exports.insertMessage = async (author, content) => {
  await pool.query('INSERT INTO messages (author, content) VALUES ($1, $2)', [
    author,
    content,
  ]);
};
exports.getAllMessages = async () => {
  const { rows } = await pool.query(
    'SELECT * FROM messages ORDER BY timestamp ASC',
  );
  return rows;
};
