"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeEmail = void 0;
const PLUS_ONLY = /\+.*$/;
const PLUS_AND_DOT = /\.|\+.*$/g;
const normalizableProviders = {
    'gmail.com': {
        cut: PLUS_AND_DOT,
    },
    'googlemail.com': {
        cut: PLUS_AND_DOT,
        aliasOf: 'gmail.com',
    },
    'hotmail.com': {
        cut: PLUS_ONLY,
    },
    'live.com': {
        cut: PLUS_AND_DOT,
    },
    'outlook.com': {
        cut: PLUS_ONLY,
    },
};
function normalizeEmail(email) {
    if (typeof email !== 'string') {
        throw new TypeError('normalize-email expects a string');
    }
    const lowerCasedEmail = email.toLowerCase();
    const emailParts = lowerCasedEmail.split(/@/);
    if (emailParts.length !== 2) {
        return email;
    }
    let username = emailParts[0];
    let domain = emailParts[1];
    if (normalizableProviders.hasOwnProperty(domain)) {
        if (normalizableProviders[domain].hasOwnProperty('cut')) {
            username = username.replace(normalizableProviders[domain].cut, '');
        }
        if (normalizableProviders[domain].hasOwnProperty('aliasOf')) {
            domain = normalizableProviders[domain].aliasOf;
        }
    }
    return `${username}@${domain}`;
}
exports.normalizeEmail = normalizeEmail;
