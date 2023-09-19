import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "users"
});

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

async function findAll() {
  const users = await connection.query<User>(
    `SELECT * FROM "users"`
  );

  return users.rows;
}