var express = require('express');
var os = require('os');
var app = express();

var port = process.env.APP_PORT || '8080';
var message = process.env.APP_MESSAGE || 'default message';

app.get('/', function (req, res) {
  console.log("got a request")
  res.send(`
<!DOCTYPE html>
<head title="TestApplikation">
</head>
<body>
    <h1>Moin Moin :)</h1>
    Die Testapp läuft auf <b>${os.hostname()}</b> an Port <b>${port}</b> mit dem Text <b>"${message}"</b>
</body>
</html>`

  );
});

const DOWORK = 1000
const PAUSE = 1

let fibunacci = function (maxCtr, myNumber, me) {
  let j = 0
  let f = 0
  let fList = []

  console.log(`\n me${myNumber} another calculation`);

  for (i = 0; i < maxCtr; i++) {
    f = i + j

    fList.push({
      mi: i,
      mj: j,
      mf: f,
      mr: (f * Math.random())
    })
    //console.log(`me${myNumber} max = ${maxCtr} = ${i} ${j} ${f} `)
    j = i
  }
  setTimeout(() => fibunacci(DOWORK, myNumber, me), PAUSE)
}

//fibunacci(10, 1, fibunacci)

let f0 = fibunacci
let f1 = fibunacci
let f2 = fibunacci
let f3 = fibunacci
let f4 = fibunacci
let f5 = fibunacci
let f6 = fibunacci
let f7 = fibunacci
let f8 = fibunacci
let f9 = fibunacci

f0(DOWORK, 0, f0)
f1(DOWORK, 1, f1)
f2(DOWORK, 2, f2)
f3(DOWORK, 3, f3)
f4(DOWORK, 4, f4)
f5(DOWORK, 5, f5)
f6(DOWORK, 6, f6)
f7(DOWORK, 7, f7)
f8(DOWORK, 8, f8)
f9(DOWORK, 9, f9)

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});