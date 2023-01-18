import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Dropdown, Row } from 'react-bootstrap';
import download from '../../assets/icon/download.svg';
import moment from 'jalali-moment';
import { getSongDetails } from '../../services/api/MelobitApi';
import { setPlayMusic, useMusicDispatch } from '../../services/useContext/MusicContext';

export default function Details() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const playMusicDispatch = useMusicDispatch();

    useEffect(() => {
        getSongDetails(id)
            .then(({ data }) => setData(data))
    }, [id, data])


    return (
        <>
            {
                data.length !== 0 &&
                <>
                    <div className="details_container">
                        <Row>
                            <p className='releaseDate'>
                                {moment(data.releaseDate, 'YYYY-M-D')
                                    .locale('fa')
                                    .format('YYYY/M/D')}
                            </p>
                            <div className="details_container_image">
                                <img onClick={() => setPlayMusic(playMusicDispatch, id)} src={data.image.cover.url} alt="" />
                            </div>

                            <Col xxl={4} className={'mt-5'}>
                                <h3>
                                    {data.title}
                                </h3>
                                <p className='title'>
                                    {data.artists[0].fullName}
                                </p>
                                <p>
                                    {data.downloadCount} Plays
                                </p>

                                <div className="d-flex align-items-center">
                                    <button className='play_now' onClick={() => setPlayMusic(playMusicDispatch, id)}>
                                        Play
                                    </button>
                                    <Dropdown>
                                        <Dropdown.Toggle className='play_music_upload' id={`dropdown-button-drop-up`}>
                                            <img src={download} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1" href={data.audio.medium.url}>
                                                128
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2" href={data.audio.high.url}>
                                                320
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                            <Col xxl={12}>
                                <p className='poem'>
                                    {data.lyrics}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </>
            }


        </>
    )
}
