const { ALLOWED_ORIGIN } = require('../config');

const checkOrigin = (req, res, next) => {
	const origin = req.get('Origin');
	if (!origin || origin !== ALLOWED_ORIGIN) {
		return res.status(403).json({ error: 'Access denied' });
	}
	next();
};

module.exports = { checkOrigin };