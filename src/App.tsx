import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeBody from './homepage';
import Podcast from './podcast';
import MovieList from './movie/movielist';

function Nav(props: any) {
  return (
    <div className="row">
      <img className="col-1" src="./4746048.png" />
      <div className="col-11">
        <h1> Joel Hilton Movie Site</h1>
        <p>
          <span onClick={() => props.click('home')} style={{ margin: '5px' }}>
            Home
          </span>{' '}
          <span
            onClick={() => props.click('podcast')}
            style={{ margin: '5px' }}
          >
            My Podcast
          </span>{' '}
          <span onClick={() => props.click('movies')} style={{ margin: '5px' }}>
            Movie List
          </span>
        </p>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <>
      <Nav click={setCurrentPage} />
      {currentPage == 'home' ? <HomeBody /> : null}
      {currentPage == 'podcast' ? <Podcast /> : null}
      {currentPage == 'movies' ? <MovieList /> : null}
    </>
  );
}

export default App;
