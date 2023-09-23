import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import webData from "../data/webs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replace("server", "client");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(webData);
});

router.get("/:webId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/web.html"));
});

export default router;
