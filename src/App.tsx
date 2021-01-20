import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Pagination from './Pagination';
import FireBaseEX from './FireBaseEX';
import Test from './Test';
import Slider from './Slider';
import InfiniteSlider from './InfiniteSlider';
import mixin from './styles/mixin';

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet()};
`;

function App() {
  return (
    <BrowserRouter>
      <SCContainer>
        <Link to='/pagination'>pagination</Link>
        <Link to='/fireBaseEx'>fireBaseEx</Link>
        <Link to='/Slider'>Slider</Link>
        <Link to='/infiniteSlider'>infiniteSlider</Link>
        <Link to='/test'>test</Link>
      </SCContainer>
      
      <Switch>
        <Route path='/pagination' component={Pagination}/>
        <Route path='/fireBaseEx' component={FireBaseEX}/>
        <Route path='/Slider' component={Slider}/>
        <Route path='/infiniteSlider' component={InfiniteSlider}/>
        <Route path='/test' component={Test}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
