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
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des utilisateurs');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Serveur back-end démarré sur le port ${port}`);
});