const express = require('express');
const app = express();
const port = 3001;
// routes
const indexRouter = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRouter);
app.use(express.static('./assets'));

app.listen(port, () => {
  console.log(port, 'post start!!');
});
