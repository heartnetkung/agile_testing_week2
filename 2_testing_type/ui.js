const express = require('express');
const app = express();
const controller = require('./controller');
const port = 3000;

app.use('/api', controller);
app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
