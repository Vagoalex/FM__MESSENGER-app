import { UI } from '../view/UI.js';
import { sendGETRequest, setUserName } from './requests.js';
import { changeOnChatSection } from './chat.js';

export function changeOnSettingsSection() {
	UI.SECTIONS.WRAPPERS.forEach(item => item.classList.remove('section--active'));
	UI.SECTIONS.SETTINGS.classList.add('section--active');
}

UI.SETTINGS.SETTINGS_CLOSE.addEventListener('click', () => {
	changeOnChatSection();
});

UI.SETTINGS.SETTINGS_BTN.addEventListener('click', e => {
	e.preventDefault();

	const nameValue = UI.SETTINGS.SETTINGS_INPUT.value;

	if (nameValue.length >= 13) {
		alert('Максимальное количество символов = 13!');

		UI.SETTINGS.SETTINGS_FORM.reset();
		changeOnSettingsSection();
	} else {
		setUserName(`${UI.API_SERVER_URL}user`, nameValue);
		sendGETRequest(`${UI.API_SERVER_URL}user/me`);

		changeOnChatSection();
		UI.SETTINGS.SETTINGS_FORM.reset();
	}
});
