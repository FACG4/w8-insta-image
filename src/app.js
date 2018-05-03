const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
// const coimages/pic1.jpgokieSession = require('cookie-session');
const controllers = require('./controllers/index');
require('env2')('./config.env');

// local modules
// const helpers = require('./views/helpers/index');

const app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: [secret],
//   maxAge: 24 * 60 * 60 * 1000,
// }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
  // helpers,
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
