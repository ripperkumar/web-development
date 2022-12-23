const express = require('express');
const bodyParser = require('body-parser');
const http=require("https");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req,res){
const apikey="9d57fbad52d57ea01545cb7914cb206a";
const query = req.body.cityName;
const url="https:api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid="+apikey;
  http.get(url,function(response){
    response.on("data",function(data){
      const d = JSON.parse(data);
      var desc= d.weather[0].description;
      var temp= d.main.temp;
      var icon= d.weather[0].icon;
      var iconurl= " http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1> The current temperature of "+query+" is "+temp +" and "+desc+"</h1>" );
      res.write("<img src="+iconurl+">");

      res.send();
    })
  })
});






app.listen(3000, function() {
  console.log("listenning to port 3000");
});
