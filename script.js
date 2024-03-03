const fs = require("fs");
const http = require("http");
const url = require("url");
const replace_card = require(`${__dirname}/resources/replace_card`);
//====================================================================================//
// overview
const overview_html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const overview_css = fs.readFileSync(`${__dirname}/style.css`, "utf-8");

// ===================================================================================//
// images

// ===================================================================================//
// about
const about_html = fs.readFileSync(`${__dirname}/about/about.html`, "utf-8");
const about_css = fs.readFileSync(`${__dirname}/about/about.css`, "utf-8");
const about_js = fs.readFileSync(`${__dirname}/about/about.js`, "utf-8");

// resources
let resources_html = fs.readFileSync(
  `${__dirname}/resources/templates/resources_overview.html`,
  "utf-8"
);

const resources_card = fs.readFileSync(
  `${__dirname}/resources/templates/resources_card.html`,
  "utf-8"
);
let resources_incard = fs.readFileSync(
  `${__dirname}/resources/templates/resources_incard.html`,
  "utf-8"
);

const resources_subdomains_card = fs.readFileSync(
  `${__dirname}/resources/templates/resources_subdomains_card.html`,
  "utf-8"
);

let resources_in_sub_domains_card = fs.readFileSync(
  `${__dirname}/resources/templates/resources_in_sub_domains_card.html`,
  "utf-8"
);

const resources_links_card = fs.readFileSync(
  `${__dirname}/resources/templates/resources_card.html`,
  "utf-8"
);

const resources_css = fs.readFileSync(
  `${__dirname}/resources/resources.css`,
  "utf-8"
);

const resources_json = fs.readFileSync(
  `${__dirname}/resources/temp.json`,
  "utf-8"
);
const resourcesObj = JSON.parse(resources_json);

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
    // file://C:/Users/HP/OneDrive/Desktop/gitam/sem7/project_phase_1/garkh/images/chatbot.png

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

  // resources page
  else if (pathname === "/resources") {
    // console.log(query);

    // getting data from the json file
    const data = fs.readFileSync(
      `${__dirname}/resources/resource_links.json`,
      "utf-8"
    );
    const dataObj = JSON.parse(data);
    // console.log(dataObj);

    // replacing the content in the domain card with domain names from the json file

    const cardsHTML = dataObj
      .map((el) => replace_card(resources_card, el))
      .join("");

    // console.log(cardsHTML);
    resources_html = resources_html.replace(/{%RESOURCES_CARDS%}/g, cardsHTML);

    // sending the resources_html back to the page
    res.writeHead(200, { "Content-type": "text/html" });

    // res.end(resources_html);
    if (Object.keys(query).length === 0) {
      console.log("I am at length 0");
      res.end(resources_html);
    }

    //=========================================================//
    else if (Object.keys(query).length === 1) {
      // domain obj

      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      // console.log(subdomainObjectsArray);

      const subdomainCardsHTML = subdomainObjectsArray
        .map((sd) => {
          // const output = replace(resources_subdomains_card, sd);
          let output = resources_subdomains_card.replace(
            /{%SUB_DOMAIN_NAME%}/g,
            sd.sub_domain_name
          );
          output = output.replace(/{%SUB_DOMAIN_ID%}/g, sd.sub_domain_id);
          output = output.replace(
            /{%DOMAIN_ID%}/g,
            resourcesObj[query.domain_id]["domain_id"]
          );
          return output;
        })
        .join("");

      resources_incard = resources_incard.replace(
        /{%SUB_DOMAIN_CARDS%}/g,
        subdomainCardsHTML
      );
      resources_incard = resources_incard.replace(
        /{%DOMAIN_NAME%}/g,
        resourcesObj[query.domain_id]["domain_name"]
      );
      // console.log(subdomainObjectsArray);
      console.log("I am at length 1");
      res.end(resources_incard);
    }

    ////////////////////////////////////////////////////////////////
    else if (Object.keys(query).length === 2) {
      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];

      const subdomainObj = subdomainObjectsArray.find(
        (obj) =>
          obj.sub_domain_id.toLowerCase() === query.sub_domain_id.toLowerCase()
      );
      if (subdomainObj.hasOwnProperty("topics")) {
        console.log("topics");
      }

      ///////////////////////////////////////////////////////////////////////
      else {
        const linksArray = subdomainObj.links;
        console.log(linksArray);
        // const linkCardsHTML = linksArray
        //   .map((link) => {
        //     let output = resources_links_card.replace(
        //       /{%LINK_NAME%}/g,
        //       link.link_name
        //     );
        //     output = output.replace(
        //       /{%SUB_DOMAIN_ID%}/g,
        //       subdomainObj.sub_domain_id
        //     );
        //     output = output.replace(
        //       /{%DOMAIN_ID%}/g,
        //       resourcesObj[query.domain_id]["domain_id"]
        //     );
        //     return output;
        //   })
        //   .join("");
        // resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
        //   /{%LINKS_CARD%}/g,
        //   linkCardsHTML
        // );
        // resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
        //   /{%SUB_DOMAIN_NAME%}/g,
        //   subdomainObj.sub_domain_name
        // );
        // // console.log(subdomainObj);
        // res.writeHead(200, { "Content-type": "text/html" });
        console.log("I am at length 2");
        res.end(resources_in_sub_domains_card);
      }
    }

    // resources.css file
    else if (pathname === "/resources.css") {
      res.writeHead(200, { "Content-type": "text/css" });
      res.end(resources_css);
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
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the requests on port 8000");
});
