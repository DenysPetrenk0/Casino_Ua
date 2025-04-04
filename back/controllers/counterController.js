import Counter from '../model/Counter.js';

export const getCounter = async (req, res) => {
	const counter = await Counter.findOne();
	if (!counter) {
		const newCounter = new Counter({ value: 0 });
		await newCounter.save();
		return res.json(newCounter);
	}
	res.json(counter);
};

export const updateCounter = async (req, res) => {
	const { action } = req.body;
	const counter = await Counter.findOne();

	if (!counter) return res.status(404).json({ error: 'Counter not found' });

	if (action === 'increment') {
		counter.value += 1;
	} else if (action === 'decrement') {
		if (counter.value === 0) return res.status(400).json({ error: 'Value cannot be less than 0' });
		counter.value -= 1;
	}

	counter.updatedAt = new Date();
	await counter.save();
	res.json(counter);
};