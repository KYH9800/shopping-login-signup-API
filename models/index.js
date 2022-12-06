const mongoose = require('mongoose');
// mongodb://localhost:27017/shopping-demo
const connect = () => {
  mongoose
    .connect('mongodb://localhost/shopping-demo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));
};

mongoose.connection.on('error', (err) => {
  console.error('connection error: ', err);
});

module.exports = connect;
