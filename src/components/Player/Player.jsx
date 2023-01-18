import React, { useEffect, useState } from 'react'
import PlayIcon from '../../assets/icon/play.svg';
import PauseIcon from '../../assets/icon/pause.svg';
import ForwardIcon from '../../assets/icon/forward.svg';
import RewindIcon from '../../assets/icon/rewind.svg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { getSongDetails } from '../../services/api/MelobitApi';
import { Link } from 'react-router-dom';


export default function Player({ musicId }) {

  const [play, setPlay] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    getSongDetails(musicId)
      .then(({ data }) => {
        setPlay(data);
        setLoad(true);
      });

    return () => {
      setLoad(false);
    }
  }, [musicId]);


  const playButton = React.createElement('img', { src: PlayIcon });
  const pauseButton = React.createElement('img', { src: PauseIcon });
  const forwardButton = React.createElement('img', { src: ForwardIcon });
  const rewindButton = React.createElement('img', { src: RewindIcon });


  return (
    <>

      {
        load &&
        <div className='play_music'>
          <Link to={`/details/${play.id}`}>
            <img className='play_music_img' src={play.image.cover.url} alt="" />
          </Link>

          <div>
            <p className='play_music_title'>
              {play.title}
            </p>
            <p className='play_music_singer'>
              {play.artists[0].fullName}
            </p>
          </div>

          <AudioPlayer
            autoPlay
            src={play.audio.medium.url}
            onPlay={e => console.log("onPlay")}
            customIcons={{
              play: playButton,
              pause: pauseButton,
              forward: forwardButton,
              rewind: rewindButton,
              loop: false,
            }}
            className='music_player'
            customAdditionalControls={[]}
            customVolumeControls={[]}
            layout="horizontal-reverse"
          />

        </div>
      }
    </>
  )
}
