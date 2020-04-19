import React, { useState } from 'react';
import { Form, message } from 'antd';
import FormAddMovieComponent from './FormAddMovie.component';
import _ from 'lodash';
import { useGlobalState } from '../../globalState';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';

const FormAddMovieContainer = props => {
  const { type = 'movie' } = props;
  const [dynamicCount, setDynamicCount] = useState({
    subtitles: 0
  });
  const [subtitleType, setSubtitleType] = useState('direct');
  const [fileSubtitles, setFileSubtitles] = useGlobalState('fileSubtitles');
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [dataMovie, setDataMovie] = useState({});
  const [isShowResult, setIsShowResult] = useState(false);

  const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  };

  const quality = [
    {
      id: 0,
      name: '360p'
    },
    {
      id: 1,
      name: '480p'
    },
    {
      id: 2,
      name: '720p'
    },
    {
      id: 3,
      name: '1080p'
    },
    {
      id: 4,
      name: '4k'
    }
  ];

  const encOpt = [
    {
      id: 0,
      name: 'no'
    },
    {
      id: 1,
      name: 'yes'
    }
  ];

  const formField = [
    {
      label: 'Encrypt to hidden your drive id',
      required: false,
      field_name: 'enc',
      type: 'radio',
      size: 24,
      initialValue: 'yes',
      placeholder: 'yes',
      optional: encOpt
    },
    {
      label: 'Title',
      required: true,
      field_name: 'title',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder: 'ex. Joker (2019)'
    },
    {
      label: 'Drive ID / Url',
      required: true,
      field_name: 'driveId',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder:
        'ex. 1ob2IzjrEB5kodfwJ9zOGeXyn_wHQwXDN  OR  https://drive.google.com/file/d/1ob2IzjrEB5kodfwJ9zOGeXyn_wHQwXDN/view'
    },
    {
      label: 'IMDB ID',
      required: false,
      field_name: 'imdbId',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder: 'ex. tt123534'
    },
    {
      label: 'Video quality you submit',
      required: false,
      field_name: 'quality',
      type: 'radio',
      size: 24,
      initialValue: '',
      placeholder: 'ex. 720p',
      optional: quality
    },
    {
      label: 'Image Movie',
      required: false,
      field_name: 'image',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder:
        'ex. https://image.tmdb.org/t/p/original/vkFRctGpbjL0I6UlJfveETrBVCm.jpg'
    }
  ];

  const formFieldSeries = [
    {
      label: 'Encrypt to hidden your drive id',
      required: false,
      field_name: 'enc',
      type: 'radio',
      size: 24,
      initialValue: 'yes',
      placeholder: 'yes',
      optional: encOpt
    },
    {
      label: 'Title',
      required: true,
      field_name: 'title',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder: 'ex. Joker (2019)'
    },
    {
      label: 'Season',
      required: true,
      field_name: 'season',
      type: 'text',
      size: 12,
      initialValue: '',
      placeholder: 'ex. 4'
    },
    {
      label: 'Episode',
      required: true,
      field_name: 'episode',
      type: 'text',
      size: 12,
      initialValue: '',
      placeholder: 'ex. 12'
    },
    {
      label: 'Drive ID / Url',
      required: true,
      field_name: 'driveId',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder:
        'ex. 1ob2IzjrEB5kodfwJ9zOGeXyn_wHQwXDN  OR  https://drive.google.com/file/d/1ob2IzjrEB5kodfwJ9zOGeXyn_wHQwXDN/view'
    },
    {
      label: 'IMDB ID',
      required: false,
      field_name: 'imdbId',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder: 'ex. tt123534'
    },
    {
      label: 'Video quality you submit',
      required: false,
      field_name: 'quality',
      type: 'radio',
      size: 24,
      initialValue: '',
      placeholder: 'ex. 720p',
      optional: quality
    },
    {
      label: 'Image Movie',
      required: false,
      field_name: 'image',
      type: 'text',
      size: 24,
      initialValue: '',
      placeholder:
        'ex. https://image.tmdb.org/t/p/original/vkFRctGpbjL0I6UlJfveETrBVCm.jpg'
    }
  ];

  const reverseStr = str => {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

  const encb64 = str => {
    return new Buffer.from(window.btoa(reverseStr(str))).toString('base64');
  };

  const getDriveId = url => {
    let parsing = _.chain(url)
      .replace('?', '')
      .split('&')
      .map(_.partial(_.split, _, '=', 2))
      .fromPairs()
      .value();
    let array = _.chain(url)
      .split('/')
      .value();
    let driveId = '';
    if (parsing['https://drive.google.com/openid'] !== undefined) {
      driveId = parsing['https://drive.google.com/openid'];
    } else {
      driveId = array.length > 5 ? array[5] : array[0];
    }
    console.log(driveId)
    return driveId;
  };

  const POST_MOVIE = async data => {
    await Jwplayer.POST_MOVIE(data)
      .then(res => {
        if (res) {
          message.success('Success create player');
          setDataMovie(res);
          setIsShowResult(true);
          setIsLoadingSubmit(false);
          setFileSubtitles([]);
        }
      })
      .catch(() =>
        message.error(
          "Can't create player, please refresh this page and try again."
        )
      );
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        setIsLoadingSubmit(true);
        message.info('Creating player...');
        let subtitleUrl = _.chain(values.subtitleUrl)
          .map(value => ({ file: value }))
          .value();
        let subtitleLabel = _.chain(values.subtitleLabel)
          .map(value => ({ label: value }))
          .value();
        let subtitleUrlUpload = _.chain(values.subtitleUrlUpload)
          .map(value => ({ file: value }))
          .value();
        let subtitleLabelUpload = _.chain(values.subtitleLabelUpload)
          .map(value => ({ label: value }))
          .value();
        let subtitlesUploadArray = _.mergeWith(
          subtitleUrlUpload,
          subtitleLabelUpload,
          customizer
        );
        let subtitlesArray = _.mergeWith(
          subtitleUrl,
          subtitleLabel,
          customizer
        );
        let subtitles = [];

        if (values.subtitleUrl[0] === '') {
          delete values.subtitleUrl;
          delete values.subtitleLabel;
          subtitlesArray = [];
          subtitles = subtitlesUploadArray;
        }
        if (values.subtitleUrlUpload[0] === '') {
          delete values.subtitleUrlUpload;
          delete values.subtitleLabelUpload;
          subtitlesUploadArray = [];
          subtitles = subtitlesArray;
        }

        let backupDriveId = [];

        await Jwplayer.GET_TOKEN().then(async token => {
          if (token.access_token !== null) {
            await Jwplayer.POST_DRIVE_COPY(
              getDriveId(values.driveId),
              token.access_token
            )
              .then(async resCopy => {
                if (resCopy) {
                  await Jwplayer.POST_PERMISSIONS(
                    resCopy.id,
                    token.access_token
                  )
                    .then(permissions => {
                      if (permissions) {
                        if (values.enc === 'yes') {
                          backupDriveId.push(encb64(getDriveId(resCopy.id)));
                        } else {
                          backupDriveId.push(getDriveId(resCopy.id));
                        }
                      }
                    })
                    .catch(() => {
                      return;
                    });
                }
              })
              .catch(() => {
                return;
              });
          }
        });

        let data = {
          enc: values.enc === 'yes',
          title: values.title,
          driveId: getDriveId(values.driveId),
          backupDriveId: backupDriveId,
          imdbId: values.imdbId,
          quality: values.quality,
          subtitles: subtitles,
          image: values.image,
          type: 'movie'
        };

        if(values.enc === 'yes'){
          data.driveId = encb64(getDriveId(values.driveId))
        }else{
          data.enc = false
        }

        await POST_MOVIE(data);
      }
    });
  };

  const handleSubmitSeries = async event => {
    event.preventDefault();
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        setIsLoadingSubmit(true);
        message.info('Creating player...');
        let subtitleUrl = _.chain(values.subtitleUrl)
          .map(value => ({ file: value }))
          .value();
        let subtitleLabel = _.chain(values.subtitleLabel)
          .map(value => ({ label: value }))
          .value();
        let subtitleUrlUpload = _.chain(values.subtitleUrlUpload)
          .map(value => ({ file: value }))
          .value();
        let subtitleLabelUpload = _.chain(values.subtitleLabelUpload)
          .map(value => ({ label: value }))
          .value();
        let subtitlesUploadArray = _.mergeWith(
          subtitleUrlUpload,
          subtitleLabelUpload,
          customizer
        );
        let subtitlesArray = _.mergeWith(
          subtitleUrl,
          subtitleLabel,
          customizer
        );
        let subtitles = [];

        if (values.subtitleUrl[0] === '') {
          delete values.subtitleUrl;
          delete values.subtitleLabel;
          subtitlesArray = [];
          subtitles = subtitlesUploadArray;
        }
        if (values.subtitleUrlUpload[0] === '') {
          delete values.subtitleUrlUpload;
          delete values.subtitleLabelUpload;
          subtitlesUploadArray = [];
          subtitles = subtitlesArray;
        }

        let backupDriveId = [];

        await Jwplayer.GET_TOKEN().then(async token => {
          if (token.access_token !== null) {
            await Jwplayer.POST_DRIVE_COPY(
              getDriveId(values.driveId),
              token.access_token
            )
              .then(async resCopy => {
                if (resCopy) {
                  await Jwplayer.POST_PERMISSIONS(
                    resCopy.id,
                    token.access_token
                  )
                    .then(permissions => {
                      if (values.enc === 'yes') {
                        backupDriveId.push(encb64(getDriveId(resCopy.id)));
                      } else {
                        backupDriveId.push(getDriveId(resCopy.id));
                      }
                    })
                    .catch(() => {
                      return;
                    });
                }
              })
              .catch(() => {
                return;
              });
          }
        });

        let data = {
          enc: values.enc === 'yes',
          title: values.title,
          driveId: getDriveId(values.driveId),
          backupDriveId: backupDriveId,
          imdbId: values.imdbId,
          quality: values.quality,
          subtitles: subtitles,
          image: values.image,
          season: values.season,
          episode: values.episode,
          type: 'series'
        };
        if(values.enc === 'yes'){
          data.driveId = encb64(getDriveId(values.driveId))
        }
        else{
          data.enc = false
        }
        POST_MOVIE(data);
      }
    });
  };

  const handleAddMore = field => {
    setDynamicCount({
      ...dynamicCount,
      [field]: dynamicCount?.[field] + 1
    });
  };

  const handleDeleteMore = field => {
    setDynamicCount({
      ...dynamicCount,
      [field]: dynamicCount?.[field] - 1
    });
  };

  const onChangeSubtitle = value => {
    setSubtitleType(value);
  };

  return (
    <div>
      <FormAddMovieComponent
        form={props.form}
        handleSubmit={handleSubmit}
        formField={formField}
        dynamicCount={dynamicCount}
        handleAddMore={handleAddMore}
        handleDeleteMore={handleDeleteMore}
        onChangeSubtitle={onChangeSubtitle}
        subtitleType={subtitleType}
        fileSubtitles={fileSubtitles}
        isLoadingSubmit={isLoadingSubmit}
        type={type}
        formFieldSeries={formFieldSeries}
        handleSubmitSeries={handleSubmitSeries}
        dataMovie={dataMovie}
        isShowResult={isShowResult}
      />
    </div>
  );
};

const WrapperFormAddMovieContainer = Form.create({
  name: 'FormAddMovieContainer'
})(FormAddMovieContainer);

export default WrapperFormAddMovieContainer;
