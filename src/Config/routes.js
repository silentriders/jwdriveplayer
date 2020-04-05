import { HomePage, PlayMoviePage } from "../Pages";
import baseUrl from "./baseUrl";

export const routes = {
  DEFAULT: { path: baseUrl.DEFAULT, component: HomePage },
  HOME: { path: baseUrl.HOME, component: HomePage },
  MOVIES_DETAIL: { path: baseUrl.MOVIE_DETAIL, component: PlayMoviePage },
  MOVIES_PLAY: { path: baseUrl.MOVIE_PLAY, component: PlayMoviePage }
};