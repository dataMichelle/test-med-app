import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // <-- Add this to parse JSON bodies

app.get("/", (req, res) => {
  res.send("Server is running! You did it!");
});

// Add this route for registration
app.post("/api/auth/register", (req, res) => {
  const { name, email, password, phone } = req.body;
  // Here you would normally add user creation logic (e.g., save to DB)
  // For now, just send back a fake token for testing:
  if (name && email && password && phone) {
    return res.json({
      authtoken: "fakeauthtoken123",
      name,
      email,
      phone,
    });
  } else {
    return res.status(400).json({ error: "Missing fields" });
  }
});

// Add this route for login
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  // For demo: accept any email/password and return a fake token
  if (email && password) {
    return res.json({
      authtoken: "fakeauthtoken123",
      name: "Demo User",
      email,
    });
  } else {
    return res.status(400).json({ error: "Missing email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
