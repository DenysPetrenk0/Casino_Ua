require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN === 'http://localhost:5000';

module.exports = {
	PORT,
	MONGO_URI,
	ALLOWED_ORIGIN
};