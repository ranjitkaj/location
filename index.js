express = require("express");
app = express();


navigator = require('navigator');
port = 3000;


app.set('trust proxy', true);

app.get("/", async (req, res) => {

   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      res.send(Latitude= $(latitude), Longitude= $(longitude));
    });
  } else {
    console.log("Geolocation is not supported by this browser."); 
  }

});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});