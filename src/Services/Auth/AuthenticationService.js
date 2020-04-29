import BaseService from '../BaseService';
import Constants from '../../Config/Constants';

const POST_LOGIN = (body) => {
  const url = `${Constants.JWPLAYER}/login`;
  return BaseService.post(url, body);
};

export default {
  POST_LOGIN
}