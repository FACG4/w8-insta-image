const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const helpers = require('./views/helpers/index');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  }),
);

app.use(controllers);
module.exports = app;
