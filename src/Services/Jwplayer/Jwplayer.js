import BaseService from '../BaseService';
import Constants from '../../Config/Constants';

const POST_MOVIE = (body) => {
  const url = `${Constants.JWPLAYER}/movies`;
  return BaseService.post(url, body);
};

const GET_MOVIE = (id) => {
  const url = `${Constants.JWPLAYER}/movies/${id}`;
  return BaseService.get(url);
};

const GET_SOURCE = (id) => {
  const url = `${Constants.JWPLAYER}/sources?fileId=${id}`;
  return BaseService.get(url);
};

export default {
  POST_MOVIE,
  GET_MOVIE,
  GET_SOURCE
}