import React from 'react'


export default function ArtistItem({ id, name, profile }) {
    return (
        <div className='top_artist_box_item' id={id}>
            <div className='d-flex'>
                <img src={profile} alt="" />
                <div className='top_artist_box_item_title'>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}
