import { pool } from "../config/database.js";
import "../config/dotenv.js";
import websData from "../data/webs.js";

const createWebsTableQuery = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS webs;

    CREATE TABLE IF NOT EXISTS webs (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        ceo VARCHAR(255) NOT NULL,
        headquarters VARCHAR(255) NOT NULL
    );
`;
  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 webs table created successfully");
  } catch (err) {
    console.error("⚠️ error creating gifts table", err);
  }
};

const seedWebsTable = async () => {
  await createWebsTableQuery();
  websData.forEach((web) => {
    const insertQuery = {
      text: `INSERT INTO webs (name, image, description, ceo, headquarters) VALUES ($1, $2, $3, $4, $5)`,
    };

    const values = [
      web.name,
      web.image,
      web.description,
      web.ceo,
      web.headquarters,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting web", err);
        return;
      }
      console.log(`✅ ${web.name} added successfully`);
    });
  });
};

seedWebsTable();
