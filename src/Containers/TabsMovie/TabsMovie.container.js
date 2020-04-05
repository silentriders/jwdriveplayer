import React, { useState, useEffect } from 'react';
import TabsMovieComponent from './TabsMovie.component';
import Assets from '../../Assets';
import { PosterMovie } from '../../Components';
import { Row } from 'antd';
import { TmdbService } from '../../Services';

const TabsMovieContainer = (props) => {
  const [activeTabs, setActiveTabs] = useState("1");
  const [popularMovie, setPopularMovie] = useState({
    page: 1,
    data: []
  });
  const [trendingMovie, setTrendingMovie] = useState({
    page: 1,
    data: []
  });
  const [topRatedMovie, setTopRatedMovie] = useState({
    page: 1,
    data: []
  });
  const [latestMovie, setLatestMovie] = useState({
    page: 1,
    data: []
  });

  useEffect(()=>{
    const _getPopularsMovie = async () => {
      let dataDetail = []
      await TmdbService.GET_POPULAR(popularMovie.page).then(async movie=>{
        await movie.results.map(async res=>{
          await TmdbService.GET_MOVIE(res.id).then(detail=>{
            dataDetail.push(detail)
          })
          setPopularMovie({data: dataDetail})
        })
      })
    }
    const _getTrendingMovie = async () => {
      let dataDetail = []
      await TmdbService.GET_TRENDING('movie', 'day', popularMovie.page).then(async movie=>{
        await movie.results.map(async res=>{
          await TmdbService.GET_MOVIE(res.id).then(detail=>{
            dataDetail.push(detail)
          })
          setTrendingMovie({data: dataDetail})
        })
      })
    }
    const _getTopRatedMovie = async () => {
      let dataDetail = []
      await TmdbService.GET_TOP_RATED(popularMovie.page).then(async movie=>{
        await movie.results.map(async res=>{
          await TmdbService.GET_MOVIE(res.id).then(detail=>{
            dataDetail.push(detail)
          })
          setTopRatedMovie({data: dataDetail})
        })
      })
    }
    const _getLatestMovie = async () => {
      let dataDetail = []
      await TmdbService.GET_LATEST(popularMovie.page).then(async movie=>{
        await movie.results.map(async res=>{
          await TmdbService.GET_MOVIE(res.id).then(detail=>{
            dataDetail.push(detail)
          })
          setLatestMovie({data: dataDetail})
        })
      })
    }
    _getPopularsMovie()
    _getTrendingMovie()
    _getTopRatedMovie()
    _getLatestMovie()
  },[])

  const _mapping = (key) => (
    <Row style={{display: 'flex', marginTop: '24px', flexWrap: 'wrap'}}>
    {eval(key).data.map((discover, key) => (
      <PosterMovie key={key}
        id={discover.id}
        type={discover.type}
        title={discover.title}
        release={discover.release_date}
        vote_average={discover.vote_average}
        img={discover.poster_path}
        season={discover.season}
        runtime={discover.runtime}
      />
    ))}
    </Row>
  )

  const menuTabs = [
    {
      key: "1",
      name: "Popular",
      icon: Assets.icon.fire_red,
      content: _mapping('popularMovie')
    },
    {
      key: "2",
      name: "Trendings",
      icon: Assets.icon.trending_red,
      content: _mapping('trendingMovie')
    },
    {
      key: "3",
      name: "Favorites",
      icon: Assets.icon.heart_red,
      content: _mapping('topRatedMovie')
    },
    {
      key: "4",
      name: "Recently Added",
      icon: Assets.icon.timer_red,
      content: _mapping('latestMovie')
    }
  ]
  return (
    <div>
      <TabsMovieComponent menuTabs={menuTabs}
        activeTabs={activeTabs}
      />
    </div>
  );
};

export default TabsMovieContainer;