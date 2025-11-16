export const createUserTable = async (pool) => {
	try {
		await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                userName VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                created_date TIMESTAMP DEFAULT NOW()
            );
        `);
		console.log("Users table ensured to exist.");
	} catch (err) {
		console.error("Error creating users table:", err);
	}
};
