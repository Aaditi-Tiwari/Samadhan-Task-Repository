// index.js

// Step 1: 'http' module import karo
const http = require("http");

// Step 2: Server create karo
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // Header set
  res.end("Hello World"); // Response send
});

// Step 3: Server ko port 3000 par run karo
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
