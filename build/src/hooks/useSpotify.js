import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const useSpotify = () => {
  const [nowPlaying, setNowPlaying] = useLocalStorage('spotify-now-playing', {
    isPlaying: false,
    title: '',
    artist: '',
    albumImageUrl: '',
    songUrl: ''
  });

  const getAccessToken = async () => {
    const basic = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    return response.json();
  };

  const getNowPlaying = async () => {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) return;

    try {
      const { access_token } = await getAccessToken();

      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 204 || response.status > 400) {
        setNowPlaying({ isPlaying: false });
        return;
      }

      const song = await response.json();

      if (!song.item) {
        setNowPlaying({ isPlaying: false });
        return;
      }

      setNowPlaying({
        isPlaying: song.is_playing,
        title: song.item.name,
        artist: song.item.artists.map((_artist) => _artist.name).join(', '),
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
      });
    } catch (error) {
      console.error("Spotify Fetch Error:", error);
    }
  };

  useEffect(() => {
    getNowPlaying();
    const interval = setInterval(getNowPlaying, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return nowPlaying;
};
