import { UI, TEMPLATES } from '../view/UI.js';
import { changeOnSettingsSection } from './settings.js';
import { sendGETRequest, getMyInfo } from './requests.js';
import { getCookie } from './storage.js';
import { startApp } from '../app.js';
import { formatDate } from './helpers.js';

const socket = new WebSocket(`ws://chat1-341409.oa.r.appspot.com/websockets?${getCookie('authorization-token')}`);

const messageList = JSON.parse(localStorage.getItem('messages'));
let start = -20;
let end = messageList && messageList.length;

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

async function historyLoad() {
	const response = await sendGETRequest(`${UI.API_SERVER_URL}messages/`);
	const historyJSON = await response;
	localStorage.setItem('messages', JSON.stringify(historyJSON.messages));
	renderHistory(historyJSON);
}

async function renderHistory(response, start, end) {
	const historyArray = response.messages;
	const startArray = historyArray.slice(-30);

	startArray.forEach(async message => {
		await renderMessages(message.user.name, message.text, formatDate(message.createdAt), message.user.email);
	});
}

async function renderMessages(name, content, time, email) {
	const myData = await getMyInfo();

	if (myData.email == email) {
		createMessage(name, content, time, TEMPLATES.myTEMPLATE.myMESSAGE);
	} else {
		createMessage(name, content, time, TEMPLATES.interTEMPLATE.interMESSAGE);
	}
}

async function createMessage(name, content, time, TEMPLATE) {
	const template = TEMPLATE;

	const messageContent = template.content.querySelector('.message__content');
	messageContent.innerHTML = `
	<span class="message__sender">${name}: </span><span class="message__content">${content}</span>
	`;

	const messageTime = template.content.querySelector('.message__time');
	messageTime.textContent = time;

	const message = template.content.cloneNode(true);
	UI.CHAT.CHAT_WINDOW.prepend(message);
}

async function createMyMessage() {
	const messageValue = UI.CHAT.CHAT_INPUT.value;

	const myData = await getMyInfo();

	const template = TEMPLATES.myTEMPLATE.myMESSAGE;

	const messageContent = template.content.querySelector('.message__content');

	if (messageValue == '') {
		messageContent.textContent = '...';
	} else {
		messageContent.textContent = messageValue;
	}

	const senderName = template.content.querySelector('.message__sender');

	senderName.textContent = `${myData.name}: `;

	// Send the message in chat

	// socket.onopen = () => {
	// 	socket.send(JSON.stringify({ text: `${messageValue}` }));
	// };

	const message = template.content.cloneNode(true);
	UI.CHAT.CHAT_WINDOW.prepend(message);
	UI.CHAT.CHAT_FORM.reset();
}

// async function getMessages(start, end, scrollTrigger = true) {
// 	const messages = JSON.parse(localStorage.getItem('messages')).slice(start, end).reverse();

// 	await messages.forEach(async function (messageData) {
// 		const messageItem = await renderMessageItem(messageData);
// 		await UI.CHAT.messageList.prepend(messageItem);
// 		if (scrollTrigger) scrollToBottom();
// 	});
// }

// function getMessageScrollTop() {
// 	UI.CHAT.messagesWrapper.addEventListener('scroll', async function (event) {
// 		if (this.scrollTop === 0) {
// 			const height = this.scrollHeight;
// 			start += -20;
// 			end -= 20;
// 			await getMessages(start, end, false);
// 			await this.scrollTo(0, this.scrollHeight - height);
// 		}
// 	});
// }
// getMessageScrollTop();
