import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const ALLOWED_ORIGIN = process.env.NODE_ENV === 'development'
	? process.env.ALLOWED_ORIGIN
	: 'https://casinoua.vercel.app';