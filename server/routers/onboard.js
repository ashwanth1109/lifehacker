"use strict";

import { Router } from "express";

import pool from "../";

const router = Router();

router.get("/register", (req, res) => {
  res.send("Register route");
});

export default router;
