require('@babel/register')()

const express = require('express');
const app = express();

const { render } = require('./render');

// for start write "node ./src/server.js"
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>

    <body>
      <div id="root">${render()}</div>
      <script src="index.js"></script>
    </body>

    </html>
  `)
})

app.listen(3000, () => console.log('Server is ready, port 3000 is opened'))
