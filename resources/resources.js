console.log("resources page testing");
const fs = require("fs");
const http = require("http");

// Reading the data from the file resources.json
const data = fs.readFileSync(
  `${__dirname}/resources/resource_links.json`,
  "utf-8"
);
const dataObj = JSON.parse(data);

// Creating a server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send JSON data as response
  res.end(JSON.stringify(dataObj));
});

// Define the port number
console.log(dataObj);
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// defining the routes for the application
