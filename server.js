const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// Initialize sessions
const sess = {
  secret: 'tech blog session',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookie: {
     // Session will automatically expire in 10 minutes
    expires: 1000 * 60 * 1000,
  },
};

const app = express();

const PORT = process.env.PORT || 3001;


app.use(session(sess));

app.use(express.static('public/images'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});