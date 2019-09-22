"use strict";

import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import APP_ROOT from "app-root-path";

dotenv.config({ silent: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use("/", express.static(`${APP_ROOT}/dist/client`));

app.get("/api", (req, res) =>
  res.json({
    test: "hello life hacker"
  })
);

app.get("/*", (req, res) => res.sendFile(`${APP_ROOT}/dist/client/index.html`));

app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);
