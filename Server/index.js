const express = require('express');
const app = express();



app.listen(port=8000, () => {
    console.log(
        `server listening on ${port}`
    );
});