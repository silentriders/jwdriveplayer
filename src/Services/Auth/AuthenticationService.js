import BaseService from '../BaseService';
import Constants from '../../Config/baseUrl';

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}

const getTokenAuth = () => {
  if (getCookie('userData') !== '' && getCookie('userData') !== 'undefined') {
    return JSON.parse(getCookie('userData')).oauth.access_token;
  }
  return '';
};

const getUserId = () => {
  if (getCookie('userData') !== '' && getCookie('userData') !== 'undefined') {
    return JSON.parse(getCookie('userData')).id;
  }
  return '';
};

const getUserData = () => {
  if (getCookie('userData') !== '' && getCookie('userData') !== 'undefined') {
    return JSON.parse(getCookie('userData'));
  }
  return {};
};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  const domain = process.env.REACT_APP_DOMAIN;
  document.cookie =
    cname + '=' + cvalue + ';' + expires + ';domain=' + domain + ';path=/';
}

const login = body => {
  return BaseService.post(Constants.LOGIN, body);
};

const removeToken = () => setCookie('userData', '', 1000);
const removeUserId = () => setCookie('userData', '', 1000);

const logout = () => setCookie('userData', '', 1000);

export default {
  getUserId,
  getUserData,
  login,
  logout,
  removeToken,
  removeUserId,
  getTokenAuth,
  setCookie
};
