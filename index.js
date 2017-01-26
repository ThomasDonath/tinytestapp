var express = require('express');
var os = require('os');
var app = express();

var port = process.env.APP_PORT || 8080;
var message = process.env.APP_MESSAGE || 'default message';

app.get('/', function (req, res) {
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

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

