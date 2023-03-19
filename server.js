const express = require('express');
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection');



   
const { FORCE } = require('sequelize/types/index-hints');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { 
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});