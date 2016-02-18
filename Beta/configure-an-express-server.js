// http://www.codewars.com/kata/configure-an-express-server

const solution = () => {
  var express = require('express');
  var app = express();
  
  app.listen(process.env.PORT, process.env.HOST, () => { });
};