import { getCookie } from './storage.js';
import { UI } from '../view/UI.js';
export { sendPOSTRequest, sendGETRequest, setUserName, getMyInfo };

async function sendGETRequest(url) {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${getCookie('authorization-token')}`,
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

async function setUserName(url, newName) {
	try {
		const response = await fetch(url, {
			method: 'PATCH',
			body: JSON.stringify({ name: `${newName}` }),
			headers: {
				Authorization: `Bearer ${getCookie('authorization-token')}`,
				'Content-Type': 'application/json;charset=utf-8',
			},
		});
		const result = await response.json();
		return (userName = result.name);
	} catch (error) {
		return error;
	}
}

async function getMyInfo() {
	const response = await sendGETRequest(`${UI.API_SERVER_URL}user/me`);
	const myData = {
		name: response.name,
		email: response.email,
		token: response.token,
		id: response._id,
	};
	return myData;
}
