import CryptoJS from 'crypto-js';

const TOKEN_KEY = 'auth_token';
const EXPIRY_KEY = 'auth_token_expiry';
const TOKEN_EXPIRY_TIME = 3600 * 1000; // 1 hour in milliseconds

const secretKey = process.env.SECRET_KEY || 'development_secret_key';

export const createToken = (data: string): string => {
  const randomText = CryptoJS.lib.WordArray.random(16).toString();
  const token = CryptoJS.AES.encrypt(
    `${data}:${randomText}`,
    secretKey,
  ).toString();
  return token;
};

export const decryptToken = (token: string): string | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(token, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  } catch (error) {
    return null;
  }
};

export const verifyToken = (token: string): boolean => {
  const decryptedText = decryptToken(token);
  if (!decryptedText) {
    return false;
  }

  const [data, randomText] = decryptedText.split(':');
  return !!data && !!randomText;
};

export const setTokenLocalStorage = (token: string) => {
  const expiryTime = Date.now() + TOKEN_EXPIRY_TIME;
  // jwt unable to use, probably is bsc client side rendering
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(EXPIRY_KEY, expiryTime.toString());
};

export const getTokenLocalStorage = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiryTime = parseInt(localStorage.getItem(EXPIRY_KEY) || '0', 10);

  if (Date.now() > expiryTime) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRY_KEY);
    return null;
  }

  return token;
};
