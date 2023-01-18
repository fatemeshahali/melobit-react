import React, { useEffect, useState } from 'react'
import Slider from './Components/Slider/Slider'
import { Col, Row } from 'react-bootstrap';
import { getLatestSliders, getLatestSong, getTopDaySong, getTopWeekSong, getTrendingArtist } from '../../services/api/MelobitApi';
import Mood from './Components/Mood/Mood';
import TopArtists from './Components/TopArtists/TopArtists';
import { setPlayMusic, useMusicDispatch } from '../../services/useContext/MusicContext';
import SongTab from './Components/SongTab/SongTab';

export default function Home() {
  const [latestSong, setLatestSong] = useState([]);
  const [daySong, setDaySong] = useState([]);
  const [weekSong, setWeekSong] = useState([]);
  const [artists, setArtists] = useState([]);

  const [slider, setSlider] = useState(null);
  const playMusicDispatch = useMusicDispatch();

  useEffect(() => {
    getLatestSliders()
      .then(({ data }) => setSlider(data.results));
    getLatestSong()
      .then(({ data }) => setLatestSong(data.results));
    getTopDaySong()
      .then(({ data }) => setDaySong(data.results));
    getTopWeekSong()
      .then(({ data }) => setWeekSong(data.results));
      getTrendingArtist()
      .then(({ data }) => setArtists(data.results))
  }, []);

  return (
    <>
      <Row xxl={12}>
        <Col xl={12}>
          <Slider slider={slider} handlePlayMusic={(e) => setPlayMusic(playMusicDispatch, e.target.id)} />
          <Mood />
          <SongTab
            daySong={daySong}
            latestSong={latestSong}
            weekSong={weekSong}
            handlePlayMusic={(e) => setPlayMusic(playMusicDispatch, e.target.id)} />
            <TopArtists artists={artists} />
        </Col>
      </Row>
    </>
  )
}
