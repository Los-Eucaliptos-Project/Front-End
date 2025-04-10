const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

function leerDatos() {
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { users: [], 'pending-requirements': [] };
  }
}

function escribirDatos(data) {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

app.post('/requirements', (req, res) => {
  const nuevoRequerimiento = req.body;
  const data = leerDatos();


  nuevoRequerimiento.id = `REQ-${Date.now()}`;

  data['pending-requirements'].push(nuevoRequerimiento);
  escribirDatos(data);

  res.status(201).json(nuevoRequerimiento);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});