import Tab from 'react-bootstrap/Tab';
import SongItem from './SongItem';
import { Col, Nav, Row } from 'react-bootstrap';

function SongTab({ latestSong, daySong, weekSong, handlePlayMusic }) {

  const latestItem = latestSong.length !== 0 ? latestSong.map((item, index) => (
    <Col xxl={4} xl={4} md={4} sm={4} key={index}>
      <SongItem
        id={item.id}
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={handlePlayMusic}
      />
    </Col>
  )) : null;
  const dayItem = daySong.length !== 0 ? daySong.map((item, index) => (
    <Col xxl={4} xl={4} md={4} sm={4} key={index}>
      <SongItem
        id={item.id}
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={handlePlayMusic} />
    </Col>
  )) : null;
  const weekItem = weekSong.length !== 0 ? weekSong.map((item, index) => (
    <Col xxl={4} xl={4} md={4} sm={4} key={index}>
      <SongItem
        id={item.id}
        url={item.image.cover.url}
        title={item.title}
        singer={item.artists[0].fullName}
        handlePlayMusic={handlePlayMusic} />
    </Col>
  )) : null;

  return (
    <div className="song_tab">

      <Tab.Container id="left-tabs-example" defaultActiveKey="latestItem">
        <Row>
          <Col sm={3} className='tab_controler px-0'>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="latestItem">
                  {latestSong.length !== 0 && <img src={latestSong[0].image.cover.url} alt="" />}
                  <span className='ms-2'>New Song</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dayItem">
                  {daySong.length !== 0 && <img src={daySong[0].image.cover.url} alt="" />}
                  <span className='ms-2'>Trending Songs</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="weekItem">
                  {weekSong.length !== 0 && <img src={weekSong[1].image.cover.url} alt="" />}
                  <span className='ms-2'>Week Trending</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="latestItem">
                <Row>
                  {latestItem}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="dayItem">
                <Row>
                  {dayItem}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="weekItem">
                <Row>
                  {weekItem}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div >
  );
}

export default SongTab;