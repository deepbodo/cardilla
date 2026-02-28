require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

// Middleware
app.use(express.json());
app.use(
  cors(
    CLIENT_ORIGIN
      ? {
          origin: CLIENT_ORIGIN,
        }
      : undefined,
  ),
);

// Routes
const paymentRoutes = require("./routes/paymentRoutes");
const userRoutes = require("./routes/user");
const creditCardRoutes = require("./routes/creditCardRoutes");
const billsRoute = require("./routes/bills");

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI; // Retrieve the URI from the environment variable
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database.");
});

// Routes
app.use("/api/payments", paymentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/credit-card", creditCardRoutes);
app.use("/api/bills", billsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
