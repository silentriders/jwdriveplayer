/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { LayoutAdmin } from '../../../Components';
import AddMovieComponent from './AddMovie.component';
import Jwplayer from '../../../Services/Jwplayer/Jwplayer';
import Constants from '../../../Config/Constants';
import UserContext from '../../../Context/UserContext';

const AddMovieContainer = (props) => {
  const { userCookies } = useContext(
    UserContext
  );
  const [dataMovie, setDataMovie] = useState({})
  const user = JSON.parse(userCookies)
  const isEdit = props.match.path === '/dashboard/movies/:id/edit'
  const idMovie = props.match.params.id

  useEffect(() => {
    const getMovieById = () => {
      Jwplayer.GET_MOVIE(idMovie, Constants.JWPLAYER, user.token).then(movie => {
        setDataMovie(movie)
      })
    }
    if(isEdit){
      getMovieById()
    }
  }, [])
  return (
    <LayoutAdmin history={props.history}>
      <AddMovieComponent isEdit={isEdit} dataMovieEdit={dataMovie} />
    </LayoutAdmin>
  );
};

export default AddMovieContainer;