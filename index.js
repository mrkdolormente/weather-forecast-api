const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');

const verifyToken = require('./middlewares/verify-token.middleware');

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/users', verifyToken, usersRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Weather Forecast API!',
  });
});

app.listen(port, () => {
  console.log(`Weather Forecast App listening on port ${port}`);
});
