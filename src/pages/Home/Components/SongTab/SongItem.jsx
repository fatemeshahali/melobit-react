import React from 'react'
import PlayIcon from '../../../../assets/icon/play.svg';
import { Link } from 'react-router-dom';

export default function SongItem({ url, title, singer, handlePlayMusic, id }) {
    return (<>

        <div className="song_item">
            <div className='item_overlay'></div>
            <Link to={`/details/${id}`}>
                <img src={url} alt="" />
            </Link>
            <p className="song_item_title">
                {title}
            </p>
            <p className="song_item_singer">
                {singer}
            </p>

            <div className="item_details fadeIn-bottom">
                <button onClick={handlePlayMusic} id={id}>
                    <img src={PlayIcon} alt="" />
                </button>
            </div>

        </div>
    </>
    )
}
