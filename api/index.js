require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_URI } = require('./config');
const counterRoutes = require('./routes/counterRoutes');

const app = express();

mongoose.connect(MONGO_URI)
	.then(() => console.log('DB ok'))
	.catch((err) => console.log('DB error', err));

app.use(express.json());
app.use(cors());
// app.use(cors(	{
// 	origin: [`${process.env.ALLOWED_ORIGIN}`],
// 	methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
// 	credentials: true
// }));

app.get("/", (req, res) => {
	res.json('hello')
})

app.use('/api', counterRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});