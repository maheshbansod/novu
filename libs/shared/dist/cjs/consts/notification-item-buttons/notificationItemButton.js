"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationItemButtons = exports.lightButtonStyle = exports.darkButtonStyle = void 0;
const messages_1 = require("../../entities/messages");
const primaryButton = {
    key: messages_1.ButtonTypeEnum.PRIMARY,
    displayName: 'Primary',
};
const secondaryButton = {
    key: messages_1.ButtonTypeEnum.SECONDARY,
    displayName: 'Secondary',
};
exports.darkButtonStyle = {
    primary: {
        backGroundColor: 'linear-gradient(99deg,#DD2476 0% 0%, #FF512F 100% 100%)',
        fontColor: '#FFFFFF',
        removeCircleColor: 'white',
    },
    secondary: { backGroundColor: '#3D3D4D', fontColor: '#FFFFFF', removeCircleColor: '#525266' },
    clicked: { backGroundColor: 'white', fontColor: '#FFFFFF', removeCircleColor: '#525266' },
};
exports.lightButtonStyle = {
    primary: {
        backGroundColor: 'linear-gradient(99deg,#DD2476 0% 0%, #FF512F 100% 100%)',
        fontColor: '#FFFFFF',
        removeCircleColor: 'white',
    },
    secondary: { backGroundColor: '#F5F8FA', fontColor: '#525266', removeCircleColor: '#525266' },
    clicked: { backGroundColor: 'white', fontColor: '#525266', removeCircleColor: '#525266' },
};
exports.notificationItemButtons = [primaryButton, secondaryButton];
