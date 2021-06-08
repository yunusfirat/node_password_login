const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const mongoose = require("mongoose")


// EJS
app.use(expressLayouts);
app.set("view engine","ejs");

// bodyParser
app.use(express.urlencoded({ extended: false }))

// DB config
const db = require("./config/keys").MongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=> console.log("MongoDb Connected..."))
.catch(err => console.log(err))

// Routes
app.use("/", require("./routes/index"))
app.use("/users", require("./routes/users"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))