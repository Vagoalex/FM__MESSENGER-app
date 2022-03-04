import { UI } from './view/UI.js';
import { createMyMessage, changeOnVerificationSection, changeOnAuthorizationSection } from './view/view.js';
import { sendRequest } from './libs/authorization.js';
import {} from './libs/verification.js';
import { setUserName, getRequest } from './libs/helpers.js';
import { setCookie, getCookie, deleteCookie } from './libs/storage.js';

function startApp() {
	UI.STARTER.START_SECTION.classList.add('section--active');
	UI.STARTER.START_VERIF_BTN.addEventListener('click', changeOnVerificationSection);
	UI.STARTER.START_AUTH_BTN.addEventListener('click', changeOnAuthorizationSection);
}
startApp();

UI.CHAT.CHAT_BTN.addEventListener('click', e => {
	e.preventDefault();

	createMyMessage();
});
UI.AUTHORIZATION.AUTH_BTN.addEventListener('click', e => {
	e.preventDefault();
	const mailValue = UI.AUTHORIZATION.AUTH_INPUT.value;

	sendRequest('https://chat1-341409.oa.r.appspot.com/api/user', mailValue, 'POST');
});
UI.VERIFICATION.VERIF_BTN.addEventListener('click', e => {
	e.preventDefault();
	const token = UI.VERIFICATION.VERIF_INPUT.value;
	setCookie('verification-token', token);
});
UI.SETTINGS.SETTINGS_BTN.addEventListener('click', e => {
	e.preventDefault();
	const nameValue = UI.SETTINGS.SETTINGS_INPUT.value;

	setUserName(nameValue);
	getRequest('https://chat1-341409.oa.r.appspot.com/api/user/me');
});
