const fs = require("fs");
const http = require("http");
const url = require("url");
const express = require("express");
const path = require("path");

const app = express();

//====================================================================================//
// sending images
app.use("/images", express.static(path.join(__dirname, "images")));

//====================================================================================//
// overview
const overview_html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const overview_css = fs.readFileSync(`${__dirname}/style.css`, "utf-8");
// about
const about_html = fs.readFileSync(`${__dirname}/about/about.html`, "utf-8");
const about_css = fs.readFileSync(`${__dirname}/about/about.css`, "utf-8");
const about_js = fs.readFileSync(`${__dirname}/about/about.js`, "utf-8");

// resources
const resources_html = fs.readFileSync(
  `${__dirname}/resources/resources.html`,
  "utf-8"
);
const resources_css = fs.readFileSync(
  `${__dirname}/resources/resources.css`,
  "utf-8"
);
const resources_js = fs.readFileSync(
  `${__dirname}/resources/resources.js`,
  "utf-8"
);
// const resources_data = fs.readFileSync(
//   `${__dirname}/resources/resource_links.json`
// );
// placements
const placements_html = fs.readFileSync(
  `${__dirname}/placements/placements.html`,
  "utf-8"
);
const placements_css = fs.readFileSync(
  `${__dirname}/placements/placements.css`,
  "utf-8"
);
const placements_js = fs.readFileSync(
  `${__dirname}/placements/placements.js`,
  "utf-8"
);
// higher studies
const higher_studies_html = fs.readFileSync(
  `${__dirname}/higher_studies/higher_studies.html`,
  "utf-8"
);
const higher_studies_css = fs.readFileSync(
  `${__dirname}/higher_studies/higher_studies.css`,
  "utf-8"
);
const higher_studies_js = fs.readFileSync(
  `${__dirname}/higher_studies/higher_studies.js`,
  "utf-8"
);
// faculty
const faculty_html = fs.readFileSync(
  `${__dirname}/faculty/faculty.html`,
  "utf-8"
);
const faculty_css = fs.readFileSync(
  `${__dirname}/faculty/faculty.css`,
  "utf-8"
);
const faculty_js = fs.readFileSync(`${__dirname}/faculty/faculty.js`, "utf-8");
// events
const events_html = fs.readFileSync(`${__dirname}/events/events.html`, "utf-8");
const events_css = fs.readFileSync(`${__dirname}/events/events.css`, "utf-8");
const events_js = fs.readFileSync(`${__dirname}//events/events.js`, "utf-8");
//=============================================================================================//
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === "/" || pathname === "/index.html") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(overview_html);
  } else if (pathname === "/style.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(overview_css);
  }

  //============================================================================================//

  // for about page
  else if (pathname === "/about/about.html") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(about_html);
  } else if (pathname === "/about/about.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(about_css);
  } else if (pathname === "/about/about.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(about_js);
  }

  //===================================================================================//

  // for resources page
  else if (pathname === "/resources/resources.html") {
    console.log("requested for the resources page");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(resources_html);
  } else if (pathname === "/resources/resources.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(resources_css);
  } else if (pathname === "/resources/resources.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(resources_js);
  }

  //=========================================================================================//

  // for placements page
  else if (pathname === "/placements/placements.html") {
    console.log("requested for the placements page");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(placements_html);
  } else if (pathname === "/placements/placements.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(placements_css);
  } else if (pathname === "/placements/placements.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(placements_js);
  }

  //=========================================================================================//

  // for higher_studies page
  else if (pathname === "/higher_studies/higher_studies.html") {
    console.log("requested for the higher studies page");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(higher_studies_html);
  } else if (pathname === "/higher_studies/higher_studies.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(higher_studies_css);
  } else if (pathname === "/higher_studies/higher_studies.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(higher_studies_js);
  }

  //==============================================================================================//

  // for faculty page
  else if (pathname === "/faculty/faculty.html") {
    console.log("requested for the faculty page");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(faculty_html);
  } else if (pathname === "/faculty/faculty.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(faculty_css);
  } else if (pathname === "/faculty/faculty.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(faculty_js);
  }

  //===========================================================================================//
  // for events page
  else if (pathname === "/events/events.html") {
    console.log("requested for the events page");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(events_html);
  } else if (pathname === "/events/events.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(events_css);
  } else if (pathname === "/events/events.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(events_js);
  }

  //==========================================================================================//
  // not found
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    console.log(pathname);
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the requests on port 8000");
});
