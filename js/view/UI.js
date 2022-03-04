export const UI = {
	STARTER: {
		START_SECTION: document.querySelector('.messenger-starter'),
		START_VERIF_BTN: document.querySelector('.starter-verification__btn'),
		START_AUTH_BTN: document.querySelector('.starter-authorization__btn'),
	},
	CHAT: {
		CHAT_WINDOW: document.querySelector('.chat-window'),
		CHAT_FORM: document.querySelector('.chat-form'),
		CHAT_INPUT: document.querySelector('.chat-form__input'),
		CHAT_BTN: document.querySelector('.chat-form__btn'),
	},
	AUTHORIZATION: {
		AUTH_CLOSE: document.querySelector('.authorization-info__close'),
		AUTH_FORM: document.querySelector('.authorization-form'),
		AUTH_INPUT: document.querySelector('.authorization-form__input-mail'),
		AUTH_BTN: document.querySelector('.authorization-form__button'),
	},
	VERIFICATION: {
		VERIF_CLOSE: document.querySelector('.verification-info__close'),
		VERIF_FORM: document.querySelector('.verification-form'),
		VERIF_INPUT: document.querySelector('.verification-form__input-token'),
		VERIF_BTN: document.querySelector('.verification-form__button'),
	},
	SETTINGS: {
		SETTINGS_CLOSE: document.querySelector('.settings-info__close'),
		SETTINGS_FORM: document.querySelector('.settings-form'),
		SETTINGS_INPUT: document.querySelector('.settings-form__input'),
		SETTINGS_BTN: document.querySelector('.settings-form__btn'),
	},
};
export const TEMPLATES = {
	myTEMPLATE: {
		myMESSAGE: document.querySelector('#myMessage'),
	},
	interTEMPLATE: {
		interMESSAGE: document.querySelector('#interMessage'),
	},
};
