import BaseService from '../BaseService';
import Constants from '../../Config/Constants';
import moment from 'moment';

const GET_TRENDING = (type, time, page) => {
  const url = `${Constants.BASE_TMDB}/trending/${type}/${time}?api_key=${Constants.API_TMDB}&page=${page}`;
  return BaseService.get(url);
};

const GET_MOVIE = id => {
  const url = `${Constants.BASE_TMDB}/movie/${id}?api_key=${Constants.API_TMDB}`;
  return BaseService.get(url);
};

const GET_POPULAR = page => {
  const url = `${Constants.BASE_TMDB}/movie/popular?api_key=${Constants.API_TMDB}&page=${page}`;
  return BaseService.get(url);
};

const GET_LATEST = page => {
  const now = moment().format('YYYY-MM-DD');
  const yearNow = moment().format('YYYY');
  const url = `${Constants.BASE_TMDB}/discover/movie?api_key=${Constants.API_TMDB}&sort_by=vote_count.desc&include_adult=false&include_video=false&primary_release_date.lte=${now}&release_date.lte=${now}&primary_release_year=${yearNow}&page=${page}`;
  return BaseService.get(url);
};

const GET_TOP_RATED = page => {
  const url = `${Constants.BASE_TMDB}/movie/top_rated?api_key=${Constants.API_TMDB}&page=${page}`;
  return BaseService.get(url);
};

export default {
  GET_LATEST,
  GET_MOVIE,
  GET_POPULAR,
  GET_TRENDING,
  GET_TOP_RATED
};
