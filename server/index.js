"use strict";

import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import APP_ROOT from "app-root-path";
import { Pool } from "pg";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import api from "./routers";

dotenv.config({ silent: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(morgan("dev"));
app.use(cookieParser());

const { DB_USER, DB_NAME, DB_PASS, HOST } = process.env;

const pool = Pool({
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
  host: HOST
});

app.use("/", express.static(`${APP_ROOT}/dist/client`));

app.use("/api", api);

app.get("/*", (req, res) => res.sendFile(`${APP_ROOT}/dist/client/index.html`));

app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);

export default pool;
