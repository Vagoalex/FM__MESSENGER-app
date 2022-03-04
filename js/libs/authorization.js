import { UI } from '../view/UI.js';
export { changeOnAuthorizationSection };
function changeOnAuthorizationSection() {}

UI.AUTHORIZATION.AUTH_BTN.addEventListener('click', e => {
	e.preventDefault();
	const token = UI.AUTHORIZATION.AUTH_INPUT.value;
	setCookie('authorization-token', token);
});
