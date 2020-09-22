const express = require('express');

const app = express();

app.get('/teste', (res, req) => {
    return res.send('Hello World!');
});

app.listen(3333);