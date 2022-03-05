import { UI } from '../view/UI.js';
import { startApp } from '../app.js';
import { setCookie } from './storage.js';
import { sendGETRequest } from './requests.js';
import { changeOnChatSection } from './chat.js';
export { changeOnAuthorizationSection };

function changeOnAuthorizationSection() {
	UI.SECTIONS.WRAPPERS.forEach(item => item.classList.remove('section--active'));
	UI.SECTIONS.AUTH.classList.add('section--active');
}

UI.AUTHORIZATION.AUTH_CLOSE.addEventListener('click', () => {
	startApp();
});

UI.AUTHORIZATION.AUTH_BTN.addEventListener('click', e => {
	e.preventDefault();

	const token = UI.AUTHORIZATION.AUTH_INPUT.value;

	if (token.length >= 165) {
		setCookie('authorization-token', token);

		sendGETRequest('https://chat1-341409.oa.r.appspot.com/api/user/me');

		changeOnChatSection();
		UI.AUTHORIZATION.AUTH_FORM.reset();
	} else {
		alert('Invalid token');
		UI.AUTHORIZATION.AUTH_FORM.reset();
	}
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhZ29hbGV4NjY2QG1haWwucnUiLCJpYXQiOjE2NDYzODQ0MTUsImV4cCI6MTY0NjgzMDgxNX0.xGQ2vxV3-sZ9AZH8c-lyGMdFm11zBs3yxWZx2iZ3vT8
