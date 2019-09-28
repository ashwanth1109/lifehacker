"use strict";

import { Router } from "express";
import dayjs from "dayjs";
import HTTP from "http-status-codes";

import onboard from "./onboard";

const router = Router();

// Testing a GET route
router.get("/", (req, res) =>
  res.json({
    [dayjs().format("DD MMM, YYYY")]: "API endpoints are running"
  })
);

// Testing a POST route
router.post("/", (req, res) => {
  const { body } = req;
  console.log("Request Body", body);
  res.status(HTTP.OK).send("POST request received loud and clear");
});

// Testing cookies request
router.get("/cookies", (req, res) => {
  const { cookies } = req;
  console.log("Cookies", cookies);
  const { signedCookies } = req;
  console.log("Signed Cookies", signedCookies);
  res.status(HTTP.OK).send("Cookies should be logged now");
});

router.use(onboard);

export default router;
