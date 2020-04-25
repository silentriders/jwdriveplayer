import {
  HomePage,
  PlayerPage,
  DashboardHomePage,
  LoginPage,
  ListMoviesPage,
  AddMoviePage
} from '../Pages';
import baseUrl from './baseUrl';

export const routes = {
  DEFAULT: { path: baseUrl.DEFAULT, component: HomePage },
  HOME: { path: baseUrl.HOME, component: HomePage },
  PLAYER: { path: baseUrl.PLAYER, component: PlayerPage },
  KEYWORD: { path: baseUrl.KEYWORD, component: HomePage },
  LOGIN: { path: baseUrl.LOGIN, component: LoginPage },
  DASHBOARD: { path: baseUrl.DASHBOARD, component: DashboardHomePage },
  DASHBOARD_LIST_MOVIES: {
    path: baseUrl.DASHBOARD_LIST_MOVIES,
    component: ListMoviesPage
  },
  DASHBOARD_ADD_MOVIE: {
    path: baseUrl.DASHBOARD_ADD_MOVIE,
    component: AddMoviePage
  },
  DASHBOARD_EDIT_MOVIE: {
    path: baseUrl.DASHBOARD_EDIT_MOVIE,
    component: AddMoviePage
  }
};
