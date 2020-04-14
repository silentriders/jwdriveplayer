import { HomePage, PlayerPage } from "../Pages";
import baseUrl from "./baseUrl";

export const routes = {
  DEFAULT: { path: baseUrl.DEFAULT, component: HomePage },
  HOME: { path: baseUrl.HOME, component: HomePage },
  PLAYER: { path: baseUrl.PLAYER, component: PlayerPage }
};