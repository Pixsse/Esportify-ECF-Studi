import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esportify'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error recovering users');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Backend server started on port ${port}`);
});