const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/formatDate');
const path = require('path');
const { User, Milestone, Post } = require('./models');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const port = process.env.PORT || 8080;

const hbs = exphbs.create({ helpers });
// modul nodejs untuk mengambil data dari form pada express.js
const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.engine('handlebars', expressHbs())

app.set('view engine', 'handlebars');

app.set('views', 'views');

// untuk mengkonvert karakter
app.use(bodyParser.urlencoded({extended: false}));


app.use(session(sess));
// switch the render engine to the handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Building a login system with NodeJS is running on port ${port}!`));
});

// mengkoneksikan ke file public/css
app.use(express.static(path.join(__dirname, 'public')));

app.get('/form2',(req,res,next) => {
    // merender file form2
    res.render('form2');
})

app.get('/form1',(req,res,next) => {
    // merender file form1
    res.render('form1');
})

app.get('/jenis_pelaporan',(req, res, next) => {
    // merender file jenis_pelaporan
    res.render('jenis_pelaporan');
}); 

app.use('/',(req,res,next) => {
    // merender file pilih_identitas
    res.render('pilih_identitas');
});




