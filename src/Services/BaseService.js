import axios from 'axios';

// function getCookie(c_name) {
//   if (document.cookie.length > 0) {
//     let c_start = document.cookie.indexOf(c_name + '=');
//     if (c_start !== -1) {
//       c_start = c_start + c_name.length + 1;
//       let c_end = document.cookie.indexOf(';', c_start);
//       if (c_end === -1) {
//         c_end = document.cookie.length;
//       }
//       return unescape(document.cookie.substring(c_start, c_end));
//     }
//   }
//   return '';
// }

// const getTokenAuth = () => {
//   if (getCookie('userData') !== '' && getCookie('userData') !== 'undefined') {
//     return JSON.parse(getCookie('userData')).oauth.access_token;
//   }
//   return '';
// };

const _createAxiosInterceptor = url => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
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

const BaseService = _createAxiosInterceptor(
  process.env.REACT_APP_BASE_URL_REST
);
export const JwService = _createAxiosInterceptor(
  process.env.REACT_APP_JW_PLATFORM_MEDIA_URL
);
export const UploadService = _createAxiosInterceptor(
  process.env.REACT_APP_UPLOAD_URL
);

export default BaseService;
