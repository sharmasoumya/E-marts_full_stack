const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "10mb" }))

const PORT = process.env.PORT || 8080

// Mongodb
mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database connected")).catch((err) => console.log(err))

//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    Cpassword: String,
    image: String
})

//model
const userModel = mongoose.model("user", userSchema)

// API

app.get("/", (req, res) => {
    res.send("server is running")
})

//signup

app.post("/signup", async (req, res) => {
    console.log("Received signup request");
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const result = await userModel.findOne({ email: email, password: password });

        if (result) {
            res.status(400).send({ message: "Email is already registered", alert: false });
        } else {
            const newUser = new userModel(req.body);
            const savedUser = await newUser.save();
            res.send({ message: "Successfully registered", alert: true });
        }
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

//login
app.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email });

        if (user && user.password === password) {
            const datasend = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image
            };
            console.log(datasend);
            res.send({ message: "login successful", alert: true, data: datasend });
        } else {
            res.send({ message: "Email or password is not correct", alert: false });
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

//product

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
})

const productModel = mongoose.model('product', productSchema)

//product api

app.post("/uploadProduct", async (req, res) => {
    console.log(req.body);
    const data = await productModel(req.body)
    const datasave = await data.save()

    res.send({ message: "Uploaded Successfully" })
})

app.get("/product", async (req, res) => {
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

//port
app.listen(PORT, () => {
    console.log("server is running at port no:" + PORT);
})