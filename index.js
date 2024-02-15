express = require("express");
app = express();


navigator = require('navigator');
port = 3000;


app.set('trust proxy', true);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(Latitude= $(latitude), Longitude= $(longitude));
    });
  } else {
    console.log("Geolocation is not supported by this browser.");

    
  }



app.get("/", async (req, res) => {
    const ip = req.ip;
    res.send(ip);
    console.log(ip);

});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});