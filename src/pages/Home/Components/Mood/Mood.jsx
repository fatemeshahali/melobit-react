import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Mood() {

    return (
        <div className='my-3'>

            <h5 className='d-flex align-items-center'>
                What is your Mood? <span className='coming'>Coming soon</span>
            </h5>
            <Row className='mood px-2'>
                <Col xxl={3} xl={3} lg={3} md={3} className="mood_item mood_work">
                    Work
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3} className="mood_item mood_relax">
                    Relax
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3} className="mood_item mood_happy">
                    Happy
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3} className="mood_item mood_sad">
                    Sad
                </Col>
            </Row>
        </div >

    )
}
