var express = require('express');
var router = express.Router();

var userIdSchema = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var index = 0;
var users = {
  a: {
    name: '小明',
    age: '10',
    hight: '150',
    width: '60',
    feature: '鼻子尖尖'
  },
  b: {
    name: '小滑',
    age: '20',
    hight: '60',
    width: '150',
    feature: '鬍子翹翹'
  },
  c: {
    name: '小王',
    age: '30',
    hight: '180',
    width: '70',
    feature: '手裡拿著釣竿'
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  let userIds = Object.keys(users);
  let table = `<table border="1px">
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                        <th>年齡</th>
                    <tr>`;
  userIds.map((userId) => {
    table += `<tr>
                  <td>${userId}</td>
                  <td>${users[userId].name}</td>
                  <td>${users[userId].age}</td>
              </tr>`;
  });
  table += `</table>`;
  res.send(table);
});

router.get('/user/:id', function(req, res, next) {
  let id = req.params.id;
  let table = `<table>
                  <tr><th>姓名<th><td>${users[id].name}</td></tr>
                  <tr><th>年齡<th><td>${users[id].age}</td></tr>
                  <tr><th>身高<th><td>${users[id].hight}</td></tr>
                  <tr><th>體重<th><td>${users[id].width}</td></tr>
                  <tr><th>特徵<th><td>${users[id].feature}</td></tr>
              </table>`;
  res.send(table);
});

// router.get('/create', function(req, res, next) {
//   let form = `<form method="get" action="/users/push">
//                   <label>姓名:
//                       <input type="text" name="name">
//                   </label></br>
//                   <label>年齡:
//                       <input type="text" name="age">
//                   </label></br>
//                   <label>身高:
//                       <input type="text" name="hight">
//                   </label></br>
//                   <label>體重:
//                       <input type="text" name="width">
//                   </label></br>
//                   <label>特徵:
//                       <input type="text" name="feature">
//                   </label></br>
//                   <input type="submit" value="新增">
//               </form>`;
//   res.send(form);
// });

router.get('/create', function(req, res, next) {
  let user = {};
  let id = userIdSchema[index]
  user[id] = {
    name: req.query.name,
    age: req.query.age,
    hight: req.query.hight,
    width: req.query.width,
    feature: req.query.feature
  };
  users = Object.assign(users, user);
  index++;
  console.log(`user: ${req.query.name} success to create`);
  res.send(req.query);
});

module.exports = router;
