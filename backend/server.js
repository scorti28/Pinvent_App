const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://pinvent-app.vercel.app"],
    credentials: true,
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

//Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

//Connect to MongoDB and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
  .catch((err) => console.log(err))