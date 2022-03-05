import { UI, TEMPLATES } from './view/UI.js';
import { changeOnAuthorizationSection } from './libs/authorization.js';
import { changeOnRegistrationSection } from './libs/registration.js';
import { setCookie, getCookie, deleteCookie } from './libs/storage.js';

export function startApp() {
	UI.SECTIONS.WRAPPERS.forEach(item => item.classList.remove('section--active'));
	UI.STARTER.START_SECTION.classList.add('section--active');
	UI.STARTER.START_AUTH_BTN.addEventListener('click', changeOnAuthorizationSection);
	UI.STARTER.START_REG_BTN.addEventListener('click', changeOnRegistrationSection);
}
startApp();
