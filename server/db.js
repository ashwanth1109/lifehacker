"use strict";

import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config({ silent: true });

const { DB_USER, DB_NAME, DB_PASS, HOST } = process.env;

const pool = Pool({
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
  host: HOST
});

export default {
  query: (text, params) => pool.query(text, params)
};
