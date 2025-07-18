const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:25000/riddlehub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 👤 Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// 🎯 API to receive signup form
app.post("/server/signin", async (req, res) => {
  try {

    const { name, username, email, password } = req.body;
    const newUser = new User({ name, username, email, password });

    await newUser.save();
    res.status(201).json({ success: true, message: "User saved to MongoDB!" });
  } 

  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

 
app.listen(5000, () => {
  console.log(`✅ Server is running at http://localhost:5000`);
});
