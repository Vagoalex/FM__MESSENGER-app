import { UI } from '../view/UI.js';
import { startApp } from '../app.js';
import { setCookie } from './storage.js';
import { sendGETRequest } from './requests.js';
import { changeOnChatSection } from './chat.js';

UI.AUTHORIZATION.AUTH_CLOSE.addEventListener('click', () => {
	startApp();
});

UI.AUTHORIZATION.AUTH_BTN.addEventListener('click', e => {
	e.preventDefault();

	const token = UI.AUTHORIZATION.AUTH_INPUT.value;

	// if (token.length >= 165) {
	if (token.length >= 0) {
		setCookie('authorization-token', token);

		sendGETRequest(`${UI.API_SERVER_URL}user/me`);

		changeOnChatSection();
		UI.AUTHORIZATION.AUTH_FORM.reset();
	} else {
		alert('Invalid token');
		UI.AUTHORIZATION.AUTH_FORM.reset();
	}
});

export function changeOnAuthorizationSection() {
	UI.SECTIONS.WRAPPERS.forEach(item => item.classList.remove('section--active'));
	UI.SECTIONS.AUTH.classList.add('section--active');
}
