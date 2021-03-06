export const UI = {
	SECTIONS: {
		WRAPPERS: document.querySelectorAll('.messenger-wrapper'),
		STARTER: document.querySelector('.messenger-starter'),
		CHAT: document.querySelector('.messenger-chat'),
		REG: document.querySelector('.messenger-registration'),
		AUTH: document.querySelector('.messenger-authorization'),
		SETTINGS: document.querySelector('.messenger-settings'),
	},
	STARTER: {
		START_SECTION: document.querySelector('.messenger-starter'),
		START_AUTH_BTN: document.querySelector('.starter-authorization__btn'),
		START_REG_BTN: document.querySelector('.starter-registration__btn'),
	},
	CHAT: {
		CHAT_WINDOW: document.querySelector('.chat-window'),
		CHAT_SETTINGS: document.querySelector('.chat-options__settings-btn'),
		CHAT_QUIT: document.querySelector('.chat-options__quit-btn'),
		CHAT_FORM: document.querySelector('.chat-form'),
		CHAT_INPUT: document.querySelector('.chat-form__input'),
		CHAT_SEND: document.querySelector('.chat-form__btn'),
	},
	REGISTRATION: {
		REG_CLOSE: document.querySelector('.registration-info__close'),
		REG_FORM: document.querySelector('.registration-form'),
		REG_INPUT: document.querySelector('.registration-form__input-mail'),
		REG_BTN: document.querySelector('.registration-form__button'),
	},
	AUTHORIZATION: {
		AUTH_CLOSE: document.querySelector('.authorization-info__close'),
		AUTH_FORM: document.querySelector('.authorization-form'),
		AUTH_INPUT: document.querySelector('.authorization-form__input-token'),
		AUTH_BTN: document.querySelector('.authorization-form__button'),
	},
	SETTINGS: {
		SETTINGS_NAME: document.querySelector('.settings__title-name'),
		SETTINGS_CLOSE: document.querySelector('.settings-info__close'),
		SETTINGS_FORM: document.querySelector('.settings-form'),
		SETTINGS_INPUT: document.querySelector('.settings-form__input'),
		SETTINGS_BTN: document.querySelector('.settings-form__btn'),
	},
	API_SERVER_URL: 'https://chat1-341409.oa.r.appspot.com/api/',
};
export const TEMPLATES = {
	myTEMPLATE: {
		myMESSAGE: document.querySelector('#myMessage'),
	},
	interTEMPLATE: {
		interMESSAGE: document.querySelector('#interMessage'),
	},
};
