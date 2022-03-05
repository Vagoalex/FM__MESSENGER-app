import { UI, TEMPLATES } from '../view/UI.js';
import { changeOnSettingsSection } from './settings.js';
import { userName, sendGETRequest } from './requests.js';
import { startApp } from '../app.js';

export async function changeOnChatSection() {
	UI.SECTIONS.WRAPPERS.forEach(item => item.classList.remove('section--active'));
	UI.SECTIONS.CHAT.classList.add('section--active');

	historyLoad();
}

UI.CHAT.CHAT_SETTINGS.addEventListener('click', () => {
	changeOnSettingsSection();
});

UI.CHAT.CHAT_QUIT.addEventListener('click', () => {
	startApp();
});

UI.CHAT.CHAT_SEND.addEventListener('click', e => {
	e.preventDefault();
	createMyMessage();
});

function createMyMessage() {
	const messageValue = UI.CHAT.CHAT_INPUT.value;

	const template = TEMPLATES.myTEMPLATE.myMESSAGE;

	const messageContent = template.content.querySelector('.message__content');

	if (messageValue == '') {
		messageContent.textContent = '...';
	} else {
		messageContent.textContent = messageValue;
	}

	const senderName = template.content.querySelector('.message__sender');

	if (userName == '') {
		senderName.textContent = `new-user: `;
	} else {
		senderName.textContent = `${userName}: `;
	}

	const message = template.content.cloneNode(true);
	UI.CHAT.CHAT_WINDOW.prepend(message);
	UI.CHAT.CHAT_FORM.reset();
}

async function historyLoad() {
	const response = sendGETRequest('https://chat1-341409.oa.r.appspot.com/api/messages/');
	const historyJSON = await response;
	localStorage.setItem('messages', JSON.stringify(historyJSON));
}

//сделаем history........................
