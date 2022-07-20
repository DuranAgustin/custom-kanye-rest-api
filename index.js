//import fetch from "node-fetch";

import { default as axios } from "axios";
import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();
const URL = "https://api.kanye.rest/";

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

app.use(cors());

// app.use((use, res, next) => {
//   //gets hit before every 3000/
//   console.log("some endpoint hit");
//   next();
// });

app.get(
  "/kanye_quotes",
  (req, res, next) => {
    console.log("middleware hit");
    //send it to the next line
    next();
  },
  async (req, res) => {
    try {
      const response = await axios.get(URL);
      res.send(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

app.get("/", (req, res) => {
  res.send("Hello Agustin");
});

// app.get("/kanye_quotes", async (req, res) => {
//   try {
//     const response = await axios.get(URL);
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.put();

// app.delete();

// app.post();
