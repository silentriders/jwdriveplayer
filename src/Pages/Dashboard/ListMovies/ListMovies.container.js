/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import ListMoviesComponent from './ListMovies.component';
import { LayoutAdmin } from '../../../Components';
import UserContext from '../../../Context/UserContext';
import Jwplayer from '../../../Services/Jwplayer/Jwplayer';
import { Tag, Button, Popconfirm, message } from 'antd';
import _ from 'lodash';

const ListMoviesContainer = props => {
  const { userCookies, setUserCookies, deleteUserCookies } = useContext(
    UserContext
  );
  const [isRefetch, setIsRefetch] = useState(false)
  const [page, setPage] = useState(1);
  const [sourceMovies, setSourceMovies] = useState({
    movies: [],
    search: []
  });
  const token = JSON.parse(userCookies).token;
  const user = JSON.parse(userCookies).user;
  const columns = [
    {
      title: 'ID',
      key: '_id',
      dataIndex: '_id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'IMDB ID',
      dataIndex: 'imdbId',
      key: 'imdbId'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'subtitles',
      dataIndex: 'subtitles',
      key: 'subtitles',
      render: subtitles => (
        <span>
          {subtitles.map(subtitle => {
            let color = 'geekblue';
            return (
              <Tag color={color} key={subtitle.label}>
                {subtitle.label.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: record => (
        <div>
          <Button onClick={() => onEditClick(record._id)}>Edit</Button>
          <Popconfirm
            title="Are you sure delete ?"
            onConfirm={() =>onConfirmDelete(record._id)}
            onCancel={null}
            okText="Yes"
            cancelText="No"
          >
            <Button type="dashed" style={{ marginLeft: 8 }}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  const onConfirmDelete = (id) => {
    Jwplayer.DELETE_MOVIE(id, token).then(resDel => {
      if(resDel) {
        message.success("Successfully delete file")
        setIsRefetch(true)
      }
    }).catch(() =>  message.success("Tell admin, error on ListMovies.container Delete Movie"))
  }

  const onEditClick = (id) => {
    props.history.push(`/dashboard/movies/${id}/edit`)
  }

  useEffect(() => {
    const _getMovies = () => {
      if(user.role === 'admin') {
        Jwplayer.GET_MOVIES_ALL(token).then(movies => {
          if (movies) {
            setSourceMovies({
              ...sourceMovies,
              movies
            });
          }
        });
      }
      else {
        Jwplayer.GET_MOVIES_BY_USER(token, page, user._id).then(movies => {
          if (movies) {
            setSourceMovies({
              ...sourceMovies,
              movies: movies.docs
            });
          }
        });
      }
    };
    _getMovies();
  }, []);

  useEffect(() => {
    const _getMovies = () => {
      if(user.role === 'admin') {
        Jwplayer.GET_MOVIES_ALL(token).then(movies => {
          if (movies) {
            setSourceMovies({
              ...sourceMovies,
              movies
            });
          }
        });
      }
      else {
        Jwplayer.GET_MOVIES_BY_USER(token, page, user._id).then(movies => {
          if (movies) {
            setSourceMovies({
              ...sourceMovies,
              movies: movies.docs
            });
          }
        });
      }
      setIsRefetch(false)
    };
    if(isRefetch) {
      _getMovies()
    }
  }, [isRefetch]);

  const onSearch = value => {
    const result = _.filter(sourceMovies.movies, movie => {
      return (
        movie._id === value || movie.title === value || movie.imdbId === value
      );
    });
    if (value !== '') {
      setSourceMovies({
        ...sourceMovies,
        search: result
      });
    } else {
      setSourceMovies({
        ...sourceMovies,
        search: []
      });
    }
  };

  return (
    <LayoutAdmin history={props.history}>
      <ListMoviesComponent
        columns={columns}
        dataSource={sourceMovies}
        onSearch={onSearch}
      />
    </LayoutAdmin>
  );
};

export default ListMoviesContainer;
