import { getCookie } from './storage.js';
export { userName, sendPOSTRequest, sendGETRequest, setUserName };

let userName = '';

async function sendGETRequest(url, token = getCookie('authorization-token')) {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json;charset=utf-8',
			},
		});
		return await response.json();
	} catch (error) {
		return error;
	}
}

async function sendPOSTRequest(url, body) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		});
		return await response.json();
	} catch (error) {
		return error;
	}
}

async function setUserName(url, newName, token = getCookie('authorization-token')) {
	try {
		const response = await fetch(url, {
			method: 'PATCH',
			body: JSON.stringify({ name: `${newName}` }),
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		return (userName = result.name);
	} catch (error) {
		return error;
	}
}
