const express = require('express');
const emailRouter = require('./emailRouter');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(emailRouter);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});