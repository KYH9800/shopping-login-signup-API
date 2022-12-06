const express = require('express');
const app = express();
const port = 3001;
// routes
const indexRouter = require('./routes');
// connect mongoose
const connect = require('./models');
connect();

// post, put 전달된 body 데이터를 req.body로 사용할 수 있도록 만든 bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // content type이 urlencoded type의 경우 parser 해준다

app.use('/api', indexRouter); // API가 사용되기 위한 라우터를 등록
app.use(express.static('./assets'));

app.listen(port, () => {
  console.log(port, 'post start!!');
});
