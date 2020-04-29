const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/public/"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(8000, () => {
  console.log('webgl-daftacademy on 8000!')
});
