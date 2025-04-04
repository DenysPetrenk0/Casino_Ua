import { ALLOWED_ORIGIN } from '../config.js';

export const checkOrigin = (req, res, next) => {
	const origin = req.get('Origin');
	if (!origin || origin !== ALLOWED_ORIGIN) {
		return res.status(403).json({ error: 'Access denied' });
	}
	next();
};