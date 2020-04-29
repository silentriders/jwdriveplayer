import BaseService from '../BaseService';
import Constants from '../../Config/Constants';
import axios from 'axios';

const _createAxiosInterceptor = (url, token) => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`
    }
  });

  axiosCreate.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
      //console.log(error)
    }
  );

  return axiosCreate;
};

const GET_PING = () => {
  const url = `${Constants.JWPLAYER}/ping`;
  return BaseService.get(url);
};

const GET_SOURCE = (id, enc = 'yes', server, cdn, token) => {
  let url = `${server}/sources?fileId=${id}&cdn=${cdn}&enc=${enc}`;
  if (cdn === null) {
    url = `${server}/sources?fileId=${id}&enc=${enc}`;
  }
  const JwdriveEnd = _createAxiosInterceptor(server, token);
  return JwdriveEnd.get(url);
};

const GET_TOKEN = () => {
  const url =
    'https://proxy-jwdrive.herokuapp.com/https://accounts.google.com/o/oauth2/token?refresh_token=1//0giIime-wNZ2hCgYIARAAGBASNwF-L9IrDGe3ikVCF-En-WpalPRv6AEPKkiulInQjML7LtfChY-YCk0ZfHNYRXZ9KatXGU2wdVQ&grant_type=refresh_token&client_id=439829001690-99q55da2th9ndm8fqoajhkhr0plo05u9.apps.googleusercontent.com&client_secret=5qvEwxDL4d8698IVAugLpcGv';
  return BaseService.post(url);
};

const POST_DRIVE_COPY = (driveId, token) => {
  const url = `https://proxy-jwdrive.herokuapp.com/https://www.googleapis.com/drive/v3/files/${driveId}/copy?fields=*&supportsAllDrives=true&enforceSingleParent=true&keepRevisionForever=true`;
  const JwdriveEnd = _createAxiosInterceptor(
    'https://www.googleapis.com/drive/v3/files/',
    token
  );
  return JwdriveEnd.post(url);
};

const POST_PERMISSIONS = (driveId, token) => {
  const body = {
    role: 'reader',
    type: 'anyone',
    shared: true
  };
  const url = `https://proxy-jwdrive.herokuapp.com/https://www.googleapis.com/drive/v3/files/${driveId}/permissions`;
  return BaseService.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const GET_CONFIG = verifId => {
  const url = `${Constants.JWPLAYER}/configs/${verifId}`;
  return BaseService.get(url);
};

const GET_DOWNLOAD = url => {
  return BaseService.get(url);
};

//MOVIES
const GET_MOVIES_ALL = (token) => {
  const url = `${Constants.JWPLAYER}/movies/all`;
  const JwdriveEnd = _createAxiosInterceptor(Constants.JWPLAYER, token);
  return JwdriveEnd.get(url);
}

const GET_MOVIES = (token, page) => {
  const url = `${Constants.JWPLAYER}/movies`;
  const JwdriveEnd = _createAxiosInterceptor(Constants.JWPLAYER, token);
  return JwdriveEnd.get(url);
}

const GET_MOVIES_BY_USER = (token, page, userId) => {
  const url = `${Constants.JWPLAYER}/movies?page=${page}&limit=999999999999&field&order=-1&fields=userId&filter=${userId}`;
  const JwdriveEnd = _createAxiosInterceptor(Constants.JWPLAYER, token);
  return JwdriveEnd.get(url);
}

const POST_MOVIE = body => {
  const url = `${Constants.JWPLAYER}/movies`;
  return BaseService.post(url, body);
};

const GET_MOVIE = (id, server, token) => {
  const url = `${server}/movies/${id}`;
  const JwdriveEnd = _createAxiosInterceptor(server, token);
  return JwdriveEnd.get(url);
};

const UPDATE_MOVIE = (id, body, token) => {
  const url = `${Constants.JWPLAYER}/movies/${id}`;
  const JwdriveEnd = _createAxiosInterceptor(Constants.JWPLAYER, token);
  return JwdriveEnd.patch(url, body);
}

const DELETE_MOVIE = (id, token) => {
  const url = `${Constants.JWPLAYER}/movies/${id}`;
  const JwdriveEnd = _createAxiosInterceptor(Constants.JWPLAYER, token);
  return JwdriveEnd.delete(url);
}


// AUTH

const POST_LOGIN = (server, body) => {
  const url = `${server}/login`;
  return BaseService.post(url, body);
};

const POST_REGISTER = (body) => {
  const url = `${Constants.JWPLAYER}/register`;
  return BaseService.post(url, body);
}

export default {
  POST_MOVIE,
  GET_MOVIE,
  GET_SOURCE,
  GET_PING,
  GET_TOKEN,
  POST_DRIVE_COPY,
  POST_PERMISSIONS,
  POST_LOGIN,
  GET_CONFIG,
  GET_DOWNLOAD,
  GET_MOVIES,
  DELETE_MOVIE,
  GET_MOVIES_BY_USER,
  GET_MOVIES_ALL,
  UPDATE_MOVIE,
  POST_REGISTER
};
