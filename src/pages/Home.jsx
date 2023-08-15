import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {

  return (
    <>
      <Main />
      <Row rowId={1} title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowId={2} title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row rowId={3} title='Now Playing' fetchUrl={requests.requestNowPlaying} />
      <Row rowId={4} title='Up Coming' fetchUrl={requests.requestUpcoming} />

    </>
  )
}

export default Home
