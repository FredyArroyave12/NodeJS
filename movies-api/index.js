const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

//routes
moviesApi(app);
//catch 404
app.use(notFoundHandler);
//manejadores de errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/', function (req, res) {
//   res.send('hello word');
// });

// app.get('/json', function (req, res) {
//   res.json({ hello: 'world' });
// });
// app.get('/leap-year/:year', (req, res) => {
//   const year = req.params.year;
//   if (year % 4 === 0) return res.send(`${year} es año bisiesto`);
//   res.send(`${year} es un año normie`);
// });
// app.get('/bisiesto/:anio', function (req, res) {
//   let anio = req.params.anio;
//   if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0)
//     res.send(`El año ${anio} es bisiesto.`);
//   else res.send(`El año ${anio} no es bisiesto.`);
// });

app.listen(config.port, function () {});
