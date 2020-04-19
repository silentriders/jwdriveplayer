import BaseService from '../BaseService';
import Constants from '../../Config/Constants';
import axios from 'axios'

const _createAxiosInterceptor = (url, token) => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`
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

const POST_MOVIE = body => {
  const url = `${Constants.JWPLAYER}/movies`;
  return BaseService.post(url, body);
};

const GET_MOVIE = id => {
  const url = `${Constants.JWPLAYER}/movies/${id}`;
  return BaseService.get(url);
};

const GET_SOURCE = id => {
  const url = `${Constants.JWPLAYER}/sources?fileId=${id}&cdn=${Constants.CDN}`;
  return BaseService.get(url);
};

const GET_TOKEN = () => {
  const url = `${Constants.JWPLAYER}/service2service`;
  return BaseService.get(url);
};

const POST_DRIVE_COPY = (driveId, token) => {
  const url = `https://www.googleapis.com/drive/v3/files/${driveId}/copy?fields=*`;
  const JwdriveEnd = _createAxiosInterceptor(
    'https://www.googleapis.com/drive/v3/files/', token
  );
  return JwdriveEnd.post(url)
};

const POST_PERMISSIONS = (driveId, token) => {
  const body = {
    role: 'reader',
    type: 'anyone',
    shared: true
  };
  const url = `https://www.googleapis.com/drive/v3/files/${driveId}/permissions`;
  return BaseService.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export default {
  POST_MOVIE,
  GET_MOVIE,
  GET_SOURCE,
  GET_PING,
  GET_TOKEN,
  POST_DRIVE_COPY,
  POST_PERMISSIONS
};
