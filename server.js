// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route: serves navbar
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Climate Crisis Route
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/Mominarez/ClimateCrisisProject.git"); 
});

// Typesetting Route
app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/SScodesKrinjal/CSC-317-Typesetting.git"); 
});

// Four Algorithms Route
app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/SScodesKrinjal/CSC-317-Sorting-Algorithms.git"); 
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
