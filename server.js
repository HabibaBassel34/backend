const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:4200",
    "http://frontend-habiba34-dev.apps.rm3.7wse.p1.openshiftapps.com"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"]
};

// Apply CORS
app.use(cors(corsOptions));

// Handle OPTIONS preflight for all routes
app.options("*", cors(corsOptions));

// ---- Routes ----
app.use("/auth", require("./routes/auth"));
app.use("/events", require("./routes/events"));
app.use("/attendees", require("./routes/attendees"));
app.use("/tasks", require("./routes/tasks"));
app.use("/search", require("./routes/search"));
app.use("/invitations", require("./routes/invitations"));

// ---- Server Listen ----
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
