import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screen/homescreen/HomeScreen';
import './App.scss';

const App = () => {
  return (
    <div>
      <Header/>

      <div className='app-container'>
        <Sidebar/>
     
      <Container fluid className='app-main'>
     <HomeScreen/>
      </Container>
      </div>

    </div>
  )
}

export default App;
