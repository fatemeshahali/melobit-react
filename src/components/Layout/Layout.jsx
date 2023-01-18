import React, { useState, useEffect } from 'react'
import "../../assets/sass/index.scss";
import Suggestion from '../Suggestion/Suggestion';
import Player from '../Player/Player';
import Sidebar from '../Sidebar/Sidebar';
import { useMusicState } from '../../services/useContext/MusicContext';
export default function Layout({ children }) {

  const { musicId } = useMusicState();
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    setPlayMusic(true);
  }, [musicId])

  return (
    <>
      <Sidebar />
      <div className='main'>{children}</div>
      <div style={{ width: '17em' }}>
        <Suggestion />
      </div>
      {
        playMusic && <Player musicId={musicId} />
      }
    </>
  )
}
