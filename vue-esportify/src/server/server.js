const mysql = require('mysql2');

// Config DB
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'esportify'
});

// DB Connection
connection.connect((err) => {
  if (err) {
    console.error('Database connection error :', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// DB Request
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error during query execution :', err);
    return;
  }
  console.log('Query results :', results);
});

// Close
connection.end();

// INSERT INTO users (email, username, password, user_type) 
// VALUES ('admin@example.com', 'adminUser', 'password-test-1-234', 'admin');