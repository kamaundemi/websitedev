const express = require('express');
const app = express();
app.get('/', (req, tell) => {
  tell.send ({hi: 'there we go trying one'});
});

app.listen (5000);
