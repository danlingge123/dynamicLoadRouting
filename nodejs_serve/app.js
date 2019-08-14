


var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*express允许跨域*/

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);
  else next();
});

//app.use(express.static(path.join(__dirname, 'public')));
//随机数组方法
function getRandom(start, end, length) {
  let list = [];
  for (let i = 0; i < length; i++) {
    let Range = start - end;
    let num = Math.floor(Math.random() * (Range) + end);
    list.push(num);
  }
  return list.sort(function (a, b) {
    return a - b;
  });
}
app.get('/', function (req, res) {
  res.send('首页');
})
app.get('/token', function (req, res) {
  res.jsonp({token:'132115215'});
})
app.get('/admin', function (req, res) {
      // let num =Math.floor(Math.random()*(1-100)+100);
      // if(num>50){
      //   res.jsonp({level:'super'});
      // }else{
      //   res.jsonp({level:'admin'});
      // }
      res.jsonp({level:'super'});
})
app.get('/arr', function (req, res) {
  let arr = getRandom(100, 1000, 5);
  res.jsonp({ 'res': arr });
})
app.post('/dologin', function (req, res) {
  res.json({ "msg": 'post成功' });
})

app.get('/news', function (req, res) {
  res.jsonp([Math.random()]);

})
app.listen(3000, '127.0.0.1');