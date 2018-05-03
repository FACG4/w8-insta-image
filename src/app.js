const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./controllers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(favicon(path.join(__dirname, '..', 'public', 'imgs/icon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3000);
app.use(routes);

module.exports = app;
