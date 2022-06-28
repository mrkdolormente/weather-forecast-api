const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Weather Forecast API!',
  });
});

app.listen(port, () => {
  console.log(`Weather Forecast App listening on port ${port}`);
});
