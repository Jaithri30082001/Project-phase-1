const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
const replace_card = require(`${__dirname}/resources/replace_card`);
//========================================= OVERVIEW =============================================================//

const overview_html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const overview_css = fs.readFileSync(`${__dirname}/style.css`, "utf-8");
const overview_js = fs.readFileSync(`${__dirname}/script.js`, "utf-8");

// ============================================== CREATE SERVER ======================================================= //
const server = http.createServer((req, res) => {
  // ===================================== ABOUT ===================================================================//

  const about_html = fs.readFileSync(`${__dirname}/about/about.html`, "utf-8");
  const about_css = fs.readFileSync(`${__dirname}/about/about.css`, "utf-8");
  const about_js = fs.readFileSync(`${__dirname}/about/about.js`, "utf-8");

  // ===================================== RESOURCES ===============================================================//

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
    `${__dirname}/resources/templates/resources_links_card.html`,
    "utf-8"
  );

  const resources_topics_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_topics_card.html`,
    "utf-8"
  );

  let resources_topics_in_sub_domains_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_topics_in_sub_domains_card.html`,
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

  // =========================================== PLACEMENTS ======================================================= //
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
  // ========================================= HIGHER STUDIES ===================================================== //
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
  // ============================================== FACULTY ======================================================= //
  const faculty_html = fs.readFileSync(
    `${__dirname}/faculty/faculty.html`,
    "utf-8"
  );
  const faculty_css = fs.readFileSync(
    `${__dirname}/faculty/faculty.css`,
    "utf-8"
  );
  const faculty_js = fs.readFileSync(
    `${__dirname}/faculty/faculty.js`,
    "utf-8"
  );

  // ============================================================== EVENTS ============================================================ //

  const events_html = fs.readFileSync(
    `${__dirname}/events/events.html`,
    "utf-8"
  );
  const events_css = fs.readFileSync(`${__dirname}/events/events.css`, "utf-8");
  const events_js = fs.readFileSync(`${__dirname}//events/events.js`, "utf-8");

  // ============================================ IMAGES HOME PAGE==============================================================//
  const campus_life_image = fs.readFileSync(
    `${__dirname}/images/campus-life_01.png`
  );
  const about_image = fs.readFileSync(`${__dirname}/images/about-1.png`);
  const absyz_logo = fs.readFileSync(`${__dirname}/images/absyz.png`, "utf-8");
  const accenture_logo = fs.readFileSync(`${__dirname}/images/accenture.png`);
  const tejas_logo = fs.readFileSync(`${__dirname}/images/tejas.png`);
  const alstom_logo = fs.readFileSync(`${__dirname}/images/alstom.png`);
  const deloitte_logo = fs.readFileSync(`${__dirname}/images/deloitte.jpeg`);
  const micron_logo = fs.readFileSync(`${__dirname}/images/micron.png`);
  const chatbot_image = fs.readFileSync(`${__dirname}/images/chatbot.png`);
  const search_image = fs.readFileSync(`${__dirname}/images/search.png`);
  // console.log(`${__dirname}/images/search.png`);

  // ============================= IMAGES ABOUT PAGE ========================================//

  const dropdown_image = fs.readFileSync(
    `${__dirname}/images/about/dropdown-menu.png`
  );
  const faqs_image = fs.readFileSync(`${__dirname}/images/about/faqs.png`);
  const introduction_image = fs.readFileSync(
    `${__dirname}/images/about/introduction_image.jpg`
  );
  const mission_statement_image_2 = fs.readFileSync(
    `${__dirname}/images/about/mission_statement_image_2.jpg`
  );
  // ============================================ DESTRUCTURING THE QUERY =================================================== //

  const { query, pathname } = url.parse(req.url, true);

  // ========================================== HOME PAGE ======================================================= //

  if (pathname === "/" || pathname === "/index.html") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(overview_html);
  } else if (pathname === "/style.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(overview_css);
  } else if (pathname === "/script.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(overview_js);
  }

  // ================================== SENDING IMAGES (HOME PAGE)============================ //
  else if (pathname === "/images/search.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(search_image);
  } else if (pathname === "/images/campus-life_01.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(campus_life_image);
  } else if (pathname === "/images/about-1.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(about_image);
  } else if (pathname === "/images/absyz.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(absyz_logo);
  } else if (pathname === "/images/accenture.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(accenture_logo);
  } else if (pathname === "/images/tejas.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(tejas_logo);
  } else if (pathname === "/images/alstom.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(alstom_logo);
  } else if (pathname === "/images/deloitte.jpeg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(deloitte_logo);
  } else if (pathname === "/images/micron.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(micron_logo);
  } else if (pathname === "/images/chatbot.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(chatbot_image);
  }

  //============================================ ABOUT PAGE ======================================================//
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

  // =============================== SENDING IMAGES ABOUT PAGE =============================== //
  else if (pathname === "/images/about/dropdown-menu.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(dropdown_image);
  } else if (pathname === "/images/about/introduction_image.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(introduction_image);
  } else if (pathname === "/images/about/mission_statement_image_2.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(mission_statement_image_2);
  } else if (pathname === "/images/about/faqs.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(faqs_image);
  }
  //======================================== RESOURCES PAGE=======================================================//
  else if (pathname === "/resources") {
    // ======================================READING  JSON FILE ================================================= //

    const data = fs.readFileSync(
      `${__dirname}/resources/resource_links.json`,
      "utf-8"
    );
    const dataObj = JSON.parse(data);

    const cardsHTML = dataObj
      .map((el) => replace_card(resources_card, el))
      .join("");

    resources_html = resources_html.replace(/{%RESOURCES_CARDS%}/g, cardsHTML);

    res.writeHead(200, { "Content-type": "text/html" });

    // ========================================== DOMAINS ========================================================//

    if (Object.keys(query).length === 0) {
      console.log("I am at length 0");
      res.end(resources_html);
    }

    // ======================================== SUB DOMAINS ======================================================//
    else if (Object.keys(query).length === 1) {
      // ================================== SUB DOMAINS OBJECT ARRAY =============================================//

      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      // ============================ ADDING THE DATA TO THE CARD CREATED ======================================= //

      const subdomainCardsHTML = subdomainObjectsArray
        .map((sd) => {
          let output = resources_subdomains_card.replace(
            /{%SUB_DOMAIN_NAME%}/g,
            sd.sub_domain_name
          );

          // ======================== REPLACING THE DOMAIN ID AND THE SUB DOMAIN ID ============================= //

          output = output.replace(/{%SUB_DOMAIN_ID%}/g, sd.sub_domain_id);
          output = output.replace(
            /{%DOMAIN_ID%}/g,
            resourcesObj[query.domain_id]["domain_id"]
          );
          return output;
        })
        .join("");
      console.log(
        "/////////////////////////////// THE CARD //////////////////////////////////////////////////////"
      );
      console.log(subdomainCardsHTML);

      // ================== REPLACING THE SUB_DOMAINS_CARDS WITH THE CREATED CARD (DATA ADDED) ================== //

      resources_incard = resources_incard.replace(
        /{%SUB_DOMAIN_CARDS%}/g,
        subdomainCardsHTML
      );
      console.log(
        "////////////////////////////////// RESOURCES IN CARD FILE /////////////////////////////////////////////////"
      );
      console.log(resources_incard);

      // ================================== REPLACING THE DOMAIN_NAME =========================================== //

      resources_incard = resources_incard.replace(
        /{%DOMAIN_NAME%}/g,
        resourcesObj[query.domain_id]["domain_name"]
      );

      console.log("I am at length 1");
      res.end(resources_incard);
    }
    // ============================================ TOPICS AND LINKS =========================================== //
    else if (Object.keys(query).length === 2) {
      // sub domain objects array
      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      const subdomainObj = subdomainObjectsArray.find(
        (obj) =>
          obj.sub_domain_id.toLowerCase() === query.sub_domain_id.toLowerCase()
      );

      // ======================================= TOPICS ========================================================= //
      if (subdomainObj.hasOwnProperty("topics")) {
        console.log("topics");

        // ================================ TOPICS FROM SUB DOMAINS ============================================= //
        const topicsArray = subdomainObj.topics;
        console.log(topicsArray);
        const topicCardsHTML = topicsArray
          .map((topic) => {
            // replacing the topic name
            let output = resources_topics_card.replace(
              /{%TOPIC_NAME%}/g,
              topic.topic_name
            );

            // replacing the domain id in the link
            output = output.replace(
              /{%DOMAIN_ID%}/g,
              resourcesObj[query.domain_id]["domain_id"]
            );
            // replacing the sub domain id in the link
            output = output.replace(
              /{%SUB_DOMAIN_ID%}/g,
              subdomainObj.sub_domain_id
            );
            // replacing the topic id in the link
            output = output.replace(/{%TOPIC_ID%}/g, topic.topic_id);

            console.log(output);
            return output;
          })
          .join("");

        // =================== REPLACING THE PLACEHOLDER WITH ACTUAL TOPIC CARDS ================================ //
        resources_topics_in_sub_domains_card =
          resources_topics_in_sub_domains_card.replace(
            /{%TOPICS_CARD%}/g,
            topicCardsHTML
          );

        // =================== REPLACING THE SUB DOMAIN NAME ====================================================//
        resources_topics_in_sub_domains_card =
          resources_topics_in_sub_domains_card.replace(
            /{%SUB_DOMAIN_NAME%}/g,
            subdomainObj.sub_domain_name
          );

        // ================================== SENDING THE DATA BACK ========================================== //
        res.writeHead(200, { "Content-type": "text/html" });
        console.log("I am at length 2");
        res.end(resources_topics_in_sub_domains_card);
      }

      // ========================================== LINKS ======================================================= //
      else {
        console.log("links");
        // ================================= LINKS ARRAY FROM SUB DOMAINS ======================================= //
        const linksArray = subdomainObj.links;
        // console.log(linksArray);
        // console.log(resources_links_card);

        // ============================== REPLACING THE DATA IN LINK CARD ================================= //

        const linkCardsHTML = linksArray
          .map((link) => {
            // replacing the link name
            let output = resources_links_card.replace(
              /{%LINK_NAME%}/g,
              link.link_name
            );

            // replacing the link placeholder
            output = output.replace(/{%LINK%}/g, link.link);

            // replacing the sub domain id
            output = output.replace(
              /{%SUB_DOMAIN_ID%}/g,
              subdomainObj.sub_domain_id
            );

            // replacing the domain id
            output = output.replace(
              /{%DOMAIN_ID%}/g,
              resourcesObj[query.domain_id]["domain_id"]
            );
            // console.log(output);
            return output;
          })
          .join("");

        // ========================== REPLACING THE PLACEHOLDER WITH ACTUAL LINKS CARD ========================== //

        resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
          /{%LINK_CARDS%}/g,
          linkCardsHTML
        );

        // ========================== REPLACING THE PLACEHOLDER WITH SUB DOMAIN NAME ============================ //

        resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
          /{%SUB_DOMAIN_NAME%}/g,
          subdomainObj.sub_domain_name
        );
        // console.log(subdomainObj);
        res.writeHead(200, { "Content-type": "text/html" });
        console.log("I am at length 2");
        res.end(resources_in_sub_domains_card);
      }
    }

    // ====================================== LINKS INSIDE THE TOPICS =========================================== //
    else if (Object.keys(query).length === 3) {
      console.log("I am at length 3");
      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      const subdomainObj = subdomainObjectsArray.find(
        (obj) =>
          obj.sub_domain_id.toLowerCase() === query.sub_domain_id.toLowerCase()
      );

      // ====================== TOPICS ARRAY ======================= //
      console.log("topics");
      const topicsArray = subdomainObj.topics;
      // console.log(topicsArray);

      // getting particular topic based upon the topic_id
      const topicsObj = topicsArray.find(
        (obj) => obj.topic_id.toLowerCase() === query.topic_id.toLowerCase()
      );
      // console.log(topicsObj);
      // getting the links array from the topicsObj
      const topicsLinksArray = topicsObj["links"];
      console.log(topicsLinksArray);

      // ================================ REPLACING THE DATA IN THE LINKS(FROM TOPICS) CARD =============================== //
      const topicLinksCardsHTML = topicsLinksArray
        .map((link) => {
          let output = resources_links_card.replace(
            /{%LINK_NAME%}/g,
            link.link_name
          );

          // replacing the link placeholder
          output = output.replace(/{%LINK%}/g, link.link);

          // replacing the sub domain id
          output = output.replace(
            /{SUB_DOMAIN_ID}/g,
            subdomainObj.sub_domain_id
          );

          // replacing the domain id
          output = output.replace(
            /{%DOMAIN_ID%}/g,
            resourcesObj[query.domain_id]["domain_id"]
          );

          // console.log(output);
          return output;
        })
        .join("");

      // ============================== REPLACING THE PLACEHOLDER WITH ACTUAL LINKS CARD =====================================//

      resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
        /{%LINK_CARDS%}/g,
        topicLinksCardsHTML
      );

      // =================================== REPLACING THE PLACEHOLDER WITH THE SUB DOMAIN NAME ==================================== //
      resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
        /{%SUB_DOMAIN_NAME%}/g,
        subdomainObj.sub_domain_name
      );

      res.writeHead(200, { "Content-type": "text/html" });
      res.end(resources_in_sub_domains_card);
    }
  }

  // =============================== SENDING THE RESOURCES.CSS FILE ============================================= //
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
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the requests on port 8000");
});
