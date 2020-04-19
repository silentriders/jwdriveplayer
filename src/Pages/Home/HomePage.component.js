import React from 'react';
import { FormAddMovie } from '../../Containers';
import { Row, Col, Divider, List, Typography } from 'antd';
import { Helmet } from 'react-helmet';
import { FloatChat } from '../../Components';
import Assets from '../../Assets';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const HomePageComponent = () => {
  const listFeature = [
    'Play google drive unlimited',
    'Play when your google drive get quota exceeded or limit video exceeded',
    'Play when your google drive original file deleted',
    'Player can play while your google drive still converting',
    'Quality change 360p, 480p, 720p, 1080p, more',
    'Using CDN support all countries in this world, except Pluto',
    'NO ADS ON PLAYER',
    'WE KNOW THAT USER EXPERIENCE IS IMPORTANT, SO WE DECIDED TO NOT IMPLEMENT ADS ON PLAYER, YOU DO NOT NEED TO WORRY :)',
    'Request to admin, just chat on right sidebar'
  ];
  return (
    <div>
      <FloatChat />
      <Helmet>
        <title>
          Jwdriveplayer - Free google drive streaming to jwplayer, NO ADS ON
          PLAYER
        </title>
      </Helmet>
      <Row>
        <Col span={12}>
          <h1>Jwdriveplayer</h1>
          <h3>Free google drive streaming to jwplayer</h3>
          <p>
            Jwdriveplayer is a free service to get google drive streaming link,
            get redirector.googlevideo.com files is streamable with jwplayer
            that support on any browser and mobile. Also you can add subtitle,
            your files will be encrypted to more secure and no one knows. We
            provide player that not contains ads. it will makes your users happy
            because no ads while their watch movies.
          </p>
          <p>
            When your file deleted on your google drive, no matter this server
            still can play your video properly.
          </p>
          <p>
            If you wanna copy drive from someone but their files is limited and
            cannot be download. No matter, you can paste their link on this
            server and the systems can play video to you.
          </p>
          <p>
            New generation server streaming media, bypass limit, bypas convert
            video on google drive.
          </p>
          <p>
            If you all have limit gdrive, no problem, this system can play video
            to you, and then in 1 hours this limit drive will no limit anymore.
            but only jwdrive can access it, you can;t
          </p>
        </Col>
        <Col span={12}>
          <img
            src={Assets.images.jwdriveplayer}
            alt="JWDRIVEPLAYER-GOOGLE-STREAMING-LINKS"
            width="100%"
          />
          <h4>Dashboard coming soon..</h4>
          <h4>Api coming soon..</h4>
          <h4>Mass generate coming soon..</h4>
          <h4>Go to heaven coming soon..</h4>
          <br/>
          <p>Want to help buy a good server for jwdriveplayer ? Click below for donation</p>
          <a href="https://www.buymeacoffee.com/jwdriveplayer" rel="noopener noreferrer" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style={{height: '30px !important', width: '150px !important' }} /></a>
        </Col>
        <Col span={24}>
          <Divider orientation="left">Feature</Divider>
          <List
            header={<div>List</div>}
            bordered
            dataSource={listFeature}
            renderItem={item => (
              <List.Item>
                <Typography.Text mark>[FREE]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <Col span={24}>
            <h1>Add Movie</h1>
            <p>This is only for movie that no season and episode.</p>
            <br />
            <FormAddMovie />
          </Col>
          <Col span={24} style={{ marginTop: 24 }}>
            <h1>Add Series</h1>
            <p>
              For series movie coming with season and episode. (Drama Korea, TV
              Series, more)
            </p>
            <br />
            <FormAddMovie type="series" />
          </Col>
        </Col>
        <Col span={8}>
          <h1>Chat</h1>
          <p>tell your problem here</p>
          <br />
          <Iframe
            src={'/chat.html'}
            width={400}
            frameBorder={0}
            height={520}
            style={{ marginTop: '30px' }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <img
            src={Assets.images.jwdriveplayer}
            alt="JWDRIVEPLAYER-GOOGLE-STREAMING-LINKS"
            width="500"
          />
        </Col>
        <Col span={24}>
          <h1>Jwdriveplayer</h1>
          <h3>
            Grab google drive streaming links
            (redirector.googlevideo.com/videoplayback?..)
          </h3>
          <p>
            I want to get stream link from google drive without playing it on
            web browser. The format link like this.
            https://r6---sn-npo7zn7k.c.docs.google.com/videoplayback. This
            website is similar like gdriveplayer, wowza, apicdn vip, hydrax,
            juicygdrive. But the different in this website is is free no ads on
            player. When you delete your original file on your drive, no matter
            it can still play in this server.
          </p>
          <p>
            If you have trouble using this systems, please report it to chat on
            the right
          </p>
          <Link to="/keyword/google-drive-streaming-links">
            google-drive-streaming-links
          </Link>
          <Link to="/keyword/redirector.googlevideo.com">
            redirector.googlevideo.com
          </Link>
          <Link to="/keyword/gdriveplayer.me">gdriveplayer.me</Link>
          <Link to="/keyword/gdriveplayer.us"> gdriveplayer.us</Link>
          <Link to="/keyword/gdriveplayer.net"> gdriveplayer.net</Link>
          <Link to="/keyword/jwplayer-google-drive">jwplayer-google-drive</Link>
          <Link to="/keyword/stream-drive-to-jwplayer">
            stream-drive-to-jwplayer
          </Link>
          <Link to="/keyword/generator-streaming-google-drive">
            generator-streaming-google-drive
          </Link>
          <Link to="/keyword/proxy-google-drive-generator">
            proxy-google-drive-generator
          </Link>
          <Link to="/keyword/stream-google-drive-to-different-quality">
            stream-google-drive-to-different-quality
          </Link>
          <Link to="/keyword/embed-drive-movie-streaming">
            embed-drive-movie-streaming
          </Link>
          <Link to="/keyword/stream-jwplayer-drive-embed">
            stream-jwplayer-drive-embed
          </Link>
          <Link to="/keyword/server-for-streaming-movie">
            server-for-streaming-movie
          </Link>
          <Link to="/keyword/indoxxi-bioskopkeren-layarkaca21-ganool">
            indoxxi-bioskopkeren-layarkaca21-ganool
          </Link>
          <Link to="/keyword/cara-membuat-website-streaming-tanpa-ribet">
            cara-membuat-website-streaming-tanpa-ribet
          </Link>
          <Link to="/keyword/jwplayer-google-drive-bypass-limit">
            jwplayer-google-drive-bypass-limit
          </Link>
          <Link to="/keyword/jwplayer-google-drive-bypass-convert">
            jwplayer-google-drive-bypass-convert
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 id="changelog">Changelog</h2>
          <p>
            <strong>17 Apr, 2020</strong>
          </p>
          <ul>
            <li>
              Add ability to stream when drive limit or excedeed quota (03:48
              PM)
            </li>
          </ul>
          <p>
            <strong>16 Apr, 2020</strong>
          </p>
          <ul>
            <li>can play when processing convert (08:40 PM)</li>
          </ul>
          <p>
            <strong>15 Apr, 2020</strong>
          </p>
          <ul>
            <li>
              <p>support url drive with open?id= (05:08 PM)</p>
            </li>
            <li>
              <p>add helmet, float button chat (04:52 PM)</p>
            </li>
            <li>compress image preview (11:37 AM)</li>
            <li>add initial state for faster loading (10:55 AM)</li>
          </ul>
          <p>
            <strong>14 Apr, 2020</strong>
          </p>
          <ul>
            <li>
              <p>add iframe code when finish generate (00:28 AM)</p>
            </li>
            <li>
              <p>add cors anywhere (00:00 AM)</p>
            </li>
            <li>
              <p>delete props sampah (10:52 PM)</p>
            </li>
            <li>
              <p>add jwplayer, now can play sources and subtitles (10:49 PM)</p>
            </li>
            <li>
              <p>change title (4:25 PM)</p>
            </li>
            <li>
              <p>Add Movies Series Page, Add Player Page (04:24 PM)</p>
            </li>
          </ul>
          <p>
            <strong>05 Apr, 2020</strong>
          </p>
          <ul>
            <li>
              <p>
                Merge branch &#39;dev&#39; into &#39;master&#39; ( 10:09 PM )
              </p>
            </li>
            <li>
              <p>Dev ( 04:17 AM )</p>
            </li>
          </ul>
          <p>
            <strong>02 Apr, 2020</strong>
          </p>
          <ul>
            <li>delete styled-components replace with emotion ( 10:09 PM )</li>
            <li>Deleting package unnecessary ( 09:06 PM )</li>
          </ul>
          <p>
            <strong>01 Apr, 2020</strong>
          </p>
          <ul>
            <li>CODEBASE FIX ( 11 : 56 PM )</li>
          </ul>
          <p>
            <strong>31 Mar, 2020</strong>
          </p>
          <ul>
            <li>CODEBASE FE ( 03:59 AM )</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageComponent;
