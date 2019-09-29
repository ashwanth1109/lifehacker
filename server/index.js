"use strict";

import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import APP_ROOT from "app-root-path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";

import api from "./routers";

dotenv.config({ silent: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    key: "user_sid",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

app.use("/", express.static(`${APP_ROOT}/dist/client`));

app.use("/api", api);

const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) res.redirect("/dashboard");
  else next();
};

app.get("/login", sessionChecker, (req, res) =>
  res.sendFile(`${APP_ROOT}/dist/client/index.html`)
);

app.get("/*", (req, res) => res.sendFile(`${APP_ROOT}/dist/client/index.html`));

app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);
