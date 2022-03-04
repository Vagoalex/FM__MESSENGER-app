import { UI } from './view/UI.js';
import { createMyMessage } from './view/view.js';
import { setUserName, getRequest, sendRequest } from './libs/requests.js';
import { changeOnAuthorizationSection } from './libs/authorization.js';
import { changeOnRegistrationSection } from './libs/registration.js';
import { setCookie, getCookie, deleteCookie } from './libs/storage.js';

function startApp() {
	UI.STARTER.START_SECTION.classList.add('section--active');
	UI.STARTER.START_AUTH_BTN.addEventListener('click', changeOnAuthorizationSection);
	UI.STARTER.START_REG_BTN.addEventListener('click', changeOnRegistrationSection);
}
startApp();

UI.CHAT.CHAT_BTN.addEventListener('click', e => {
	e.preventDefault();

	createMyMessage();
});

UI.SETTINGS.SETTINGS_BTN.addEventListener('click', e => {
	e.preventDefault();
	const nameValue = UI.SETTINGS.SETTINGS_INPUT.value;

	setUserName(nameValue);
	getRequest('https://chat1-341409.oa.r.appspot.com/api/user/me');
});
