"use strict";

import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import APP_ROOT from "app-root-path";
import { Pool } from "pg";

dotenv.config({ silent: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

const pool = Pool({
  user: "ashwanth",
  host: "localhost",
  database: "lifehacker",
  password: "secret",
  port: 5432
});

app.use("/", express.static(`${APP_ROOT}/dist/client`));

app.get("/api/test", (req, res) =>
  res.json({
    test: "API endpoints are running"
  })
);

app.get("/api/users", (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
});

app.get("/*", (req, res) => res.sendFile(`${APP_ROOT}/dist/client/index.html`));

app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);
