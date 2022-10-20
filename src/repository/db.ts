const { Client } = require('pg');

export const connectDb = async () => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'youtube',
      password: 'sa',
      port: 5432,
    });

    await client.connect();
    // const res = await client.query('SELECT * FROM ');
    // console.log(res);
    await client.end();
  } catch (error) {
    console.log(error);
  }
};
