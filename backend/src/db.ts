// src/db.ts
import sql from 'mssql';

const config: sql.config = {
  user: 'sa',
  password: '123',
  server: 'MARKO',
  database: 'Tandem',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// Connect only once when the app starts
const pool = sql.connect(config)
.then((pool) => {
  console.log('Connected to SQL Server!');
  return pool;
})
.catch((err) => {
  console.error('Database connection failed:', err);
  throw err;
});

// Export reusable request function
export async function request() {
  const poolInstance = await pool;
  return poolInstance.request();
}

export { sql }; // if needed elsewhere
