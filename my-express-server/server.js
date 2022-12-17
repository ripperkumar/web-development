const express =require ("express");
const app = express();

app.get("/",function(req,res){res.send("hello world");});
app.get("/about",function(req,res){res.send("<h1>hii my name is priyanshu kumar and i am a developer</h1>")})
app.listen(3000,function(){console.log("server started at port 3000");});
