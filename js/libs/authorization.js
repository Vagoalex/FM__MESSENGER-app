export async function sendRequest(url, body, method = null) {
	const options = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	};
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
}
