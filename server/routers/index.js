"use strict";

import { Router } from "express";
import dayjs from "dayjs";
import onboard from "./onboard";

const router = Router();

router.get("/", (req, res) =>
  res.json({
    [dayjs().format("DD MMM, YYYY")]: "API endpoints are running"
  })
);

router.use(onboard);

export default router;
