"use strict";

import { Router } from "express";
import HTTP from "http-status-codes";
import pool from "../";
import db from "../db";

const router = Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const text =
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *";
  const values = [username, password];
  const dbres = await db.query(text, values);
  console.log(dbres);
  res.status(HTTP.OK).json({ dbres });
});

export default router;
