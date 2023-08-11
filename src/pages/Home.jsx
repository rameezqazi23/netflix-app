import React, { useEffect, useState } from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {

  return (
    <>
      <Main />
      <Row title='Popular' fetchUrl={requests.requestPopular} />
      <Row title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row title='Now Playing' fetchUrl={requests.requestNowPlaying} />
      <Row title='Up Coming' fetchUrl={requests.requestUpcoming} />

    </>
  )
}

export default Home
