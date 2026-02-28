require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;
let isDatabaseConnected = false;

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
  res.status(200).json({
    status: "ok",
    database: isDatabaseConnected ? "connected" : "disconnected",
  });
});

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_URL;

if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error.message);
    });
} else {
  console.error("MONGODB_URI/MONGODB_URL is not set.");
}

const db = mongoose.connection;
db.on("error", (error) => {
  isDatabaseConnected = false;
  console.error("MongoDB connection error:", error.message);
});
db.once("open", () => {
  isDatabaseConnected = true;
  console.log("Connected to MongoDB database.");
});

// Routes
app.use("/api/payments", paymentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/credit-card", creditCardRoutes);
app.use("/api/bills", billsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
