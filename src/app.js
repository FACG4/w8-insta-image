const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/index');
require('env2')('./config.env');

const app = express();

app.use(cookieParser());
app.use(fileupload());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(controllers);

module.exports = app;
