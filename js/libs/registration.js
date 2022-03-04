import { UI } from '../view/UI.js';
export { changeOnRegistrationSection };
function changeOnRegistrationSection() {}

UI.REGISTRATION.REG_BTN.addEventListener('click', e => {
	e.preventDefault();
	const mailValue = UI.REGISTRATION.REG_INPUT.value;

	sendRequest('https://chat1-341409.oa.r.appspot.com/api/user', mailValue, 'POST');
});
