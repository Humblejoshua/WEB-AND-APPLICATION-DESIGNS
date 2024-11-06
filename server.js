const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // replace with your MySQL username
    password: 'your_password', // replace with your MySQL password
    database: 'mcdonalds_menu'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API endpoints
app.get('/api/menu-items', (req, res) => {
    db.query('SELECT * FROM menu_items', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

app.post('/api/menu-items', (req, res) => {
    const { name, category, price, available, image_url } = req.body;
    db.query('INSERT INTO menu_items (name, category, price, available, image_url) VALUES (?, ?, ?, ?, ?)', [name, category, price, available, image_url], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ id: result.insertId, name, category, price, available, image_url });
    });
});

app.delete('/api/menu-items/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM menu_items WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Menu item deleted' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});