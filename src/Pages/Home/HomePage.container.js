import React, { useEffect, useState } from 'react';
import HomePageComponent from './HomePage.component';
import { TmdbService } from '../../Services';

const HomePageContainer = (props) => {
  const [dataBannerTrending, setDataBannerTrending] = useState({});

  useEffect(()=>{
    const getTrendingMovie = async () => {
      await TmdbService.GET_TRENDING('movie', 'day', 1).then(async trendings=>{
       await TmdbService.GET_MOVIE(trendings.results[0].id).then(movie=>{
        setDataBannerTrending(movie)
       })
      }) 
    }
    getTrendingMovie()
  }, [])

  return <HomePageComponent dataBanner={dataBannerTrending} />;
};

export default HomePageContainer;
