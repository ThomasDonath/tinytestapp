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
const PAUSE = 1000

let fibunacci = function (maxCtr) {
  let j = 0
  let f = 0
  let fList = []

  console.log(`\n another calculation`);

  for (i = 0; i < maxCtr; i++) {
    f = i + j

    fList.push({
      i,
      j,
      f
    })
    console.log(`max = ${maxCtr} = ${i} ${j} ${f} `)
    j = i
  }
  setTimeout(() => fibunacci(DOWORK), PAUSE)
}

fibunacci(DOWORK)

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});