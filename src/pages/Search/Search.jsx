import React, { useState } from 'react'
import SearchIcon from '../../assets/icon/search.svg';
import { Col, Row } from 'react-bootstrap';
import { getSearchArtistOrSong } from '../../services/api/MelobitApi';
import PlayIcon from '../../assets/icon/play.svg';
import { setPlayMusic, useMusicDispatch } from '../../services/useContext/MusicContext';
import { Link } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false)
  const playMusicDispatch = useMusicDispatch();

  const handleChangeParams = (query) => {
    getSearchArtistOrSong(query)
      .then(({ data }) => {
        setData(data.results);
        setLoad(true);

      });
  };

  const list = data.length !== 0 ? data.map((item, index) => (
    item.song !== undefined ?
      <Col xxl={4} xl={4} lg={4} md={6} sm={12} key={index}>
        <div className='top_artist_box_item d-flex justify-content-between'  id={item.song.id}>
        <Link to={`/details/${item.song.id}`}>
          <img src={item.song.image.cover.url} alt="" />
          </Link>
          <div className='top_artist_box_item_title'>
            <p>{item.song.title}</p>
            <p>{item.song.artists[0].fullName}</p>
          </div>
          <button className='me-2' onClick={() => setPlayMusic(playMusicDispatch, item.song.id)}>
            <img src={PlayIcon} alt="" />
          </button>
        </div>
      </Col>
      : ''
  )) : null;
  return (
    <>
      <div className='search'>
        <input
          type="text"
          placeholder='search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <img src={SearchIcon} alt="" onClick={() => handleChangeParams(query)} />
      </div>
      <Row className='search_list mt-5 pt-3'>
        {
          load && list
        }
      </Row>

    </>)
}
