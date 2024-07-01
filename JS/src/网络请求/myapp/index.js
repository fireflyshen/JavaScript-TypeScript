const express = require("express");
const app = express();
const cors = require("cors")
const cookieparse = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const port = 3000;


// 跨域配置
app.use(cors({
  origin:"http://127.0.0.1:5050",
  credentials:true
}));

app.use(cookieparse())

// node路径拼接
const filepath = path.join(__dirname, "data.json");

app.get("/", (req, res) => {
  fs.readFile(filepath, function (err, data) {
    if (err) return console.error(err);
    res.set('Cache-Control', 'public, max-age=3600');
    res.send(data.toString()); 
  });
});

app.get("/cookie",(req,res) => {
  res.set("Access-Control-Allow-Credentials",true)
  res.cookie("token","123456");
  res.cookie("hello","你好")
  res.send(req.cookies)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
