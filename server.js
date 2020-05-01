var express = require("express")

var apiRoutes = require

var htmlRoutes = require

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

apiRoutes(app);

htmlRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT)
})