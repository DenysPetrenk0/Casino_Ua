const count = document.getElementById('count');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const lastUpdated = document.getElementById('last-update');

const baseURL = window.location.hostname === 'localhost'
	? 'http://localhost:5000'
	: 'https://casinoua.vercel.app';

async function fetchCounter() {
	try {
		const response = await fetch(`${baseURL}/api/counter`, {
			method: 'GET',
			headers: {
				'Origin': 'http://localhost:5000'
			}
		});

		if (response.status === 403) {
			alert('Access denied!');
			return;
		}

		const data = await response.json();
		count.textContent = data.value;
		lastUpdated.textContent = `Last updated: ${new Date(data.updatedAt).toLocaleString()}`;

		if (data.value === 0) {
			decrementBtn.disabled = true;
		} else {
			decrementBtn.disabled = false;
		}

	} catch (error) {
		console.error('Error fetching counter:', error);
	}
}

async function updateCounter(action) {
	try {
		const response = await fetch(`${baseURL}/api/counter`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Origin': 'http://localhost:5000'
			},
			body: JSON.stringify({ action })
		});

		if (response.status === 400) {
			alert('Cannot decrement below 0');
			return;
		}

		if (response.status === 403) {
			alert('Access denied!');
			return;
		}

		const data = await response.json();
		count.textContent = data.value;
		lastUpdated.textContent = `Last updated: ${new Date(data.updatedAt).toLocaleString()}`;

		count.classList.add('scale');
		setTimeout(() => count.classList.remove('scale'), 300);

		if (data.value === 0) {
			decrementBtn.disabled = true;
		} else {
			decrementBtn.disabled = false;
		}

	} catch (error) {
		console.error('Error updating counter:', error);
	}
}

incrementBtn.addEventListener('click', () => updateCounter('increment'));
decrementBtn.addEventListener('click', () => updateCounter('decrement'));

fetchCounter();
