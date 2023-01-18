import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Suggestion() {

    return (
        <div className='my-3'>
            <h5 className='d-flex align-items-center'>
                Top genres <span className='coming'>Coming soon</span>
            </h5>
            <Row className='mood px-2 d-flex flex-column px-0 mx-0   gy-2'>
                <Col xxl={12}>
                    <div className="mood_item mood_pop">
                        POP
                    </div>
                </Col>
                <Col xxl={12}>
                    <div className="mood_item mood_hip">
                        RAP
                    </div>
                </Col>
                <Col xxl={12}>
                    <div className="mood_item mood_rock">
                        ROCK
                    </div>
                </Col>
                <Col xxl={12}>
                    <div className="mood_item mood_classical">
                        TRADITIONAL
                    </div>
                </Col>
            </Row>
        </div >
    )
}
