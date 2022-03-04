import { UI, TEMPLATES } from './UI.js';

export { createMyMessage, changeOnVerificationSection, changeOnAuthorizationSection };

function createMyMessage() {
	const messageValue = UI.CHAT.CHAT_INPUT.value;

	const template = TEMPLATES.myTEMPLATE.myMESSAGE;
	const messageContent = template.content.querySelector('.message__content');
	messageContent.textContent = messageValue;

	const message = template.content.cloneNode(true);
	UI.CHAT.CHAT_WINDOW.prepend(message);
	UI.CHAT.CHAT_FORM.reset();
}

function changeOnAuthorizationSection() {}
function changeOnVerificationSection() {}
