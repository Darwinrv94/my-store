const express = require('express');
const routerApi = require('./routes');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/home', (req, res) => {
  res.send('Bienvenido');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

const whiteList = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
};

app.use(cors(options));

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT);
