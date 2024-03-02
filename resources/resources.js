// "use strict";
// const fs = require("fs");
// const http = require("http");
// const url = require("url");
// const slugify = require("slugify");
// // console.log("testing");
// // console.log("whatever");

// // reading the data from the file resources.json
// const data = fs.readFileSync("./resources/resource_links.json", "utf-8");
// const dataObj = JSON.parse(data);
// console.log(dataObj);

// // creating a server
// const server = http.createServer((req, res) => {
//   console.log(dataObj);
// });

// "use strict";
// const fs = require("fs");
// const http = require("http");

// // Reading the data from the file resources.json
// const data = fs.readFileSync("./resources/resource_links.json", "utf-8");
// const dataObj = JSON.parse(data);

// // Creating a server
// const server = http.createServer((req, res) => {
//   // Set response headers
//   res.writeHead(200, { "Content-Type": "application/json" });

//   // Send JSON data as response
//   res.end(JSON.stringify(dataObj));
// });

// // Define the port number
// console.log(dataObj);
// const PORT = 3000;

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // defining the routes for the application
