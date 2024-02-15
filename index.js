express = require("express");
app = express();
port = 3000;

app.set('trust proxy', true);

app.get("/", async (req, res) => {
    const ip = req.ip;
    res.send(ip);
    console.log(ip);

});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});