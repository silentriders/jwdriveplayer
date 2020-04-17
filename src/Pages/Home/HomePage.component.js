import React from 'react';
import { FormAddMovie } from '../../Containers';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { FloatChat } from '../../Components';
import Assets from '../../Assets';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <div>
      <FloatChat />
      <Helmet>
        <title>
          Jwdriveplayer - Free google drive streaming to jwplayer, NO ADS ON PLAYER
        </title>
      </Helmet>
      <Row>
        <Col span={12}>
          <h1>Jwdriveplayer</h1>
          <h3>Free google drive streaming to jwplayer</h3>
          <p>Jwdriveplayer is a free service to get google drive streaming link, get redirector.googlevideo.com files is streamable with jwplayer that support on any browser and mobile. Also you can add subtitle, your files will be encrypted to more secure and no one knows. We provide player that not contains ads. it will makes your users happy because no ads while their watch movies.</p>
        </Col>
        <Col span={12}>
          <img src={Assets.images.jwdriveplayer} alt="JWDRIVEPLAYER-GOOGLE-STREAMING-LINKS" width="100%" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h1>Add Movie</h1>
          <p>This is only for movie that no season and episode.</p>
          <br/>
          <FormAddMovie />
        </Col>
        <Col span={24} style={{marginTop: 24}}>
          <h1>Add Series</h1>
          <p>For series movie coming with season and episode. (Drama Korea, TV Series, more)</p>
          <br/>
          <FormAddMovie type="series" />
        </Col>
      </Row>
      <Row>
      <Col span={24} style={{textAlign: 'center'}} >
          <img src={Assets.images.jwdriveplayer} alt="JWDRIVEPLAYER-GOOGLE-STREAMING-LINKS" width="500" />
        </Col>
        <Col span={24}>
          <h1>Jwdriveplayer</h1>
          <h3>Grab google drive streaming links (redirector.googlevideo.com/videoplayback?..)</h3>
          <p>I want to get stream link from google drive without playing it on web browser. The format link like this. https://r6---sn-npo7zn7k.c.docs.google.com/videoplayback. This website is similar like similar like gdriveplayer.me, gdriveplayer.us, juicycode and other website. But the different in this website is is free no ads on player</p>
          <Link to="/keyword/google-drive-streaming-links">google-drive-streaming-links</Link>
          <Link to="/keyword/redirector.googlevideo.com">redirector.googlevideo.com</Link>
          <Link to="/keyword/gdriveplayer.me">gdriveplayer.me</Link>
          <Link to="/keyword/ gdriveplayer.us"> gdriveplayer.us</Link>
          <Link to="/keyword gdriveplayer.net"> gdriveplayer.net</Link>
          <Link to="/keyword/jwplayer-google-drive">jwplayer-google-drive</Link>
          <Link to="/keyword/stream-drive-to-jwplayer">stream-drive-to-jwplayer</Link>
          <Link to="/keyword/generator-streaming-google-drive">generator-streaming-google-drive</Link>
          <Link to="/keyword/proxy-google-drive-generator">proxy-google-drive-generator</Link>
          <Link to="/keyword/stream-google-drive-to-different-quality">stream-google-drive-to-different-quality</Link>
          <Link to="/keyword/embed-drive-movie-streaming">embed-drive-movie-streaming</Link>
          <Link to="/keyword/stream-jwplayer-drive-embed">stream-jwplayer-drive-embed</Link>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <h2 id="changelog">Changelog</h2>
<p><strong>17 Apr, 2020</strong></p>
<ul>
<li>Add ability to stream when drive limit or excedeed quota (03:48 PM)</li>
</ul>
<p><strong>16 Apr, 2020</strong></p>
<ul>
<li>can play when processing convert (08:40 PM)</li>
</ul>
<p><strong>15 Apr, 2020</strong></p>
<ul>
<li><p>support url drive with open?id= (05:08 PM)</p>
</li>
<li><p>add helmet, float button chat (04:52 PM)</p>
</li>
<li>compress image preview (11:37 AM)</li>
<li>add initial state for faster loading (10:55 AM)</li>
</ul>
<p><strong>14 Apr, 2020</strong></p>
<ul>
<li><p>add iframe code when finish generate (00:28 AM)</p>
</li>
<li><p>add cors anywhere (00:00 AM)</p>
</li>
<li><p>delete props sampah (10:52 PM)</p>
</li>
<li><p>add jwplayer, now can play sources and subtitles (10:49 PM)</p>
</li>
<li><p>change title (4:25 PM)</p>
</li>
<li><p>Add Movies Series Page, Add Player Page (04:24 PM)</p>
</li>
</ul>
<p><strong>05 Apr, 2020</strong></p>
<ul>
<li><p>Merge branch &#39;dev&#39; into &#39;master&#39; ( 10:09 PM )</p>
</li>
<li><p>Dev ( 04:17 AM )</p>
</li>
</ul>
<p><strong>02 Apr, 2020</strong></p>
<ul>
<li>delete styled-components replace with emotion ( 10:09 PM )</li>
<li>Deleting package unnecessary ( 09:06 PM )</li>
</ul>
<p><strong>01 Apr, 2020</strong></p>
<ul>
<li>CODEBASE FIX ( 11 : 56 PM )</li>
</ul>
<p><strong>31 Mar, 2020</strong></p>
<ul>
<li>CODEBASE FE ( 03:59 AM )</li>
</ul>

        </Col>
      </Row>
    </div>
  );
};

export default HomePageComponent;
