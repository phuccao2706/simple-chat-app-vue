import Axios from "../axios";
import axios from "axios";

export const getToken = async () => {
  const { VUE_APP_CLIENT_ID, VUE_APP_CLIENT_SECRET } = process.env;

  const res = await axios.post("https://accounts.spotify.com/api/token", {
    params: {
      client_id: VUE_APP_CLIENT_ID,
      client_secret: VUE_APP_CLIENT_SECRET,
      response_type: "code",
      redirect_uri: "http://localhost:8080/",
      grant_type: "authorization_code",
    },
  });

  // const data = res.json();
  console.log(res);

  // await fetch("https://accounts.spotify.com/api/token", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     Authorization:
  //       "Basic " + btoa(VUE_APP_CLIENT_ID + ":" + VUE_APP_CLIENT_SECRET),
  //   },
  //   body: "grant_type=authorization_code",
  // })
  //   .then(async (res) => {
  //     const data = await res.json();
  //     console.log(data);

  //     return data.access_token;
  //   })
  //   .catch((e) => console.error(e));
};

export const getGenres = async () => {
  const { data } = await Axios.get("browse/categories?locale=vi_VN");

  return data;
};

export const getCategory = async (id) => {
  const { data } = await Axios.get(`browse/categories/${id}`);

  return data;
};

export const getCategoryPlaylists = async (id) => {
  const { data } = await Axios.get(`browse/categories/${id}/playlists`);

  return data;
};

export const getPlaylist = async (id) => {
  const { data } = await Axios.get(`playlists/${id}`);

  return data;
};

export const getPlaylistDetail = async (id) => {
  const { data } = await Axios.get(`playlists/${id}`);

  return data;
};

export const fetASongToPlay = async (device_id, uri) => {
  const { data } = await Axios.put(
    `me/player/play`,
    { uris: [uri] },
    {
      params: { device_id },
    }
  );

  return data;
};

export const togglePlay = async (device_id) => {
  const { data } = await Axios.put(`me/player/pause`, null, {
    params: { device_id },
  });

  return data;
};
