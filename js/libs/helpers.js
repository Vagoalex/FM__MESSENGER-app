import { getCookie } from '../libs/storage.js';
export { setUserName, getRequest };

async function setUserName(newName) {
	const token = getCookie('verification-token');
	const response = await fetch('https://chat1-341409.oa.r.appspot.com/api/user', {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: `${newName}` }),
	});
	const result = await response.json();
	return result;
}

async function getRequest(url) {
	const token = getCookie('verification-token');
	const options = {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	};
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
}
