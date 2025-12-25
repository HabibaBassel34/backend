const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors({
  origin: [
    'http://localhost:4200',
    'http://frontend-habiba34-dev.apps.rm3.7wse.p1.openshiftapps.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/events", require("./routes/events"));
app.use("/attendees", require("./routes/attendees"));
app.use("/tasks", require("./routes/tasks"));
app.use("/search", require("./routes/search"));
app.use("/invitations", require("./routes/invitations"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
