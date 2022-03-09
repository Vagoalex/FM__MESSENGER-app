import { UI } from '../view/UI.js';
import { startApp } from '../app.js';
import { sendPOSTRequest } from './requests.js';

export function changeOnRegistrationSection(e) {
	UI.SECTIONS.WRAPPERS.forEach(item => item.classList.remove('section--active'));
	UI.SECTIONS.REG.classList.add('section--active');
}

UI.REGISTRATION.REG_CLOSE.addEventListener('click', () => {
	startApp();
});

UI.REGISTRATION.REG_BTN.addEventListener('click', e => {
	e.preventDefault();
	const mailValue = UI.REGISTRATION.REG_INPUT.value;
	if (mailValue.includes('@') && mailValue.length > 5) {
		sendPOSTRequest(`${UI.API_SERVER_URL}user`, { email: mailValue });

		UI.REGISTRATION.REG_FORM.reset();
	} else {
		alert('Please enter a valid email address!');

		UI.REGISTRATION.REG_FORM.reset();
	}
});
