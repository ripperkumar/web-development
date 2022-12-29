const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
});




app.post("/", function(req, res) {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  }

  const jsonData = JSON.stringify(data);
  const dc = "us10";
  const url = "https://" + dc + ".api.mailchimp.com/3.0/lists/7454fa0724";
  const options = {
    method: "POST",
    auth: "ripperIsWatching:c5d3a0fa0f6e47c00ef7e576e33b074f-us10"
  }

  const request = https.request(url, options, function(response){
  response.on("data", function(data) {
    console.log(JSON.parse(data));
  })
});

request.write(jsonData);
request.end();
});






app.listen(3000, function() {
  console.log("server is running on port 3000")
});

//data center us10
//aud id 7454fa0724
//c5d3a0fa0f6e47c00ef7e576e33b074f-us10
