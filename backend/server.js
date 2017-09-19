const express = require('express');

const app = express();

const port = process.env.PORT;

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Server for React Todo App listening on port ${port}`);
});
