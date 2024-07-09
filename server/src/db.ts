import { Pool } from 'pg';

const pool = new Pool({
  user: 'liodev',
  host: 'localhost',
  database: 'AmiciPassDB',
  password: 'P@ss2024',
  port: 5432,
});

export default pool;
