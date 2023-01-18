import React from 'react'
import { Col, Row } from 'react-bootstrap';

export default function TopArtists({ artists }) {
    const artistsItem = artists.length !== 0 ? artists.map((item, index) => (
        <Col xxl={3} xl={3} lg={3} md={3} key={index}>
            <div className='top_artist_img'>
                <img src={item.image.cover.url} alt="" />
            </div>
        </Col>
    )) : null;
    return (
        <div className='top_artist'>
            <h5 className='mb-4'>
                Top Artists
            </h5>
            <div className="top_artist_box">
                <Row>
                {artistsItem}
                </Row>
            </div>
        </div>
    )
}
