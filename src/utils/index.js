import { COMMIT_KEYS } from "@/appConstants.js";
import { fetASongToPlay } from "../services";

export const isLoggedIn = () => {
  const accessKey = localStorage.getItem("access-token");

  return !!accessKey;
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem("access-token", accessToken);
};

export const removeAccesstoken = () => {
  localStorage.removeItem("access-token");
};

export const getAccesstoken = () => {
  return localStorage.getItem("access-token");
};

export const playASong = (track, playerInstance, storeInstance) => {
  const id = playerInstance._options.id;
  storeInstance.commit(COMMIT_KEYS.SET_CURRENT_SONG, track);
  fetASongToPlay(id, track.uri);
};
