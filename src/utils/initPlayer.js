const initPlayer = () => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = localStorage.getItem("access-token");
    const player = new window.Spotify.Player({
      name: "Web Playback SDK Quick Start Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    // Connect to the player!
    player.connect();

    window.spotifyPlayer = player;
  };
};

export default initPlayer;
