import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, MONGO_URI, ALLOWED_ORIGIN } from './config.js';
import counterRoutes from './routes/counterRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({
	origin: ALLOWED_ORIGIN
}));

app.use('/api', counterRoutes);

mongoose.connect(MONGO_URI)
	.then(() => {
		console.log('MongoDB connected');
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	})
	.catch(err => console.error(err));