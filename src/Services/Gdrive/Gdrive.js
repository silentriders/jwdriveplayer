import BaseService from "../BaseService";

const GET_MEDIA = id => {
  const url = `http://api.gdriveplayer.us/v1/imdb/${id}`;
  return BaseService.get(url);
};

export default {
  GET_MEDIA
}