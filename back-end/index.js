const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());


app.get('/persons', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM persons;');
      res.status(200).json(result.rows);
} catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).send('Erro ao obter dados!');
  }
});

app.get('/persons/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM persons WHERE id = $1;', [id]);
    res.status(200).json(result.rows[0]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Registro não encontrado.' });
    }
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      res.status(500).send('Erro ao obter dados!');
    }
});

app.post('/persons', async (req, res) => {
  const { name, cpf, rg, birthday, gender } = req.body;

  if (!name || !cpf || !rg || !birthday || !gender) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const insertQuery = 'INSERT INTO persons (name, cpf, rg, birthday, gender) VALUES \
    ($1, $2, $3, $4, $5) RETURNING *';
  try {
    const result = await pool.query(insertQuery, [name, cpf, rg, birthday, gender]);
      res.status(201).json(result.rows[0]);
} catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).send('Erro ao obter dados!');
  }
});

app.put('/persons/:id', async (req, res) => {
  const id = req.params.id;
  const { name, cpf, rg, birthday, gender } = req.body;

  if (!name || !cpf || !rg || !birthday || !gender) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const updateQuery = 'UPDATE persons SET "name" = $2, cpf = $3, rg = $4, birthday = $5, \
  gender = $6 WHERE id = $1 RETURNING *';
  try {
    const result = await pool.query(updateQuery, [id, name, cpf, rg, birthday, gender]);

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 200, message: 'Registro não encontrado.' });
    }

      res.status(204).json(result.rows[0]);
  } catch (error) {
      console.error('Erro ao obter dados:', error);
      res.status(500).send('Erro ao obter dados!');
  }
});

app.delete('/persons/:id', async (req, res) => {
  const id = req.params.id;

  const deleteQuery = 'DELETE FROM persons WHERE id = $1 RETURNING *';
  try {
    const result = await pool.query(deleteQuery, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Registro não encontrado.' });
    }

    res.status(200).json(result.rows[0]);
  
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).send('Erro ao obter dados!');
  }
});


app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});