const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || "4500";
const path = require('path');
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: [`http://localhost:${port}`]
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(bodyParser.json());
app.use(require('./src/routes.js'));

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`) );