const express = require('express');

const app = express();

app.get('/teste', (res, req) => {
    return res.send('Hello World!³');
});

app.listen(3333);