const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

// 0. TODO: Create the express application
const app = express();

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 1. TODO: Create a simple route
app.get("/", (req, res) =>{
	res.json({ message: "Welcome to my application!"})
});

// TODO: Import routes

// Set port
const PORT = process.env.PORT || 8080;

// 2. TODO: Listen for requests
app.listen(PORT, () => {
	console.log('Server is running on port ${port}')
});

// TODO: Start connection to database
db.mongoose.connect(db.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => {
	console.log("Connected to databse!");
})
.catch(error) => {
	console.log("Cannot connect to databse :(", error);
	procces.exit();
}