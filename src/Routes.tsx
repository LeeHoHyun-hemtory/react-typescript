import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from './pages/pagination/Pagination';
import FireBaseEX from './pages/firebase/FireBaseEX';
import Test from './pages/test/Test';
import Slider from './pages/slider/Slider';
import InfiniteSlider from './pages/infiniteSlider/InfiniteSlider';
import InfiniteScroll from './pages/infiniteScroll/InfiniteScroll';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/pagination' component={Pagination}/>
        <Route path='/fireBaseEx' component={FireBaseEX}/>
        <Route path='/Slider' component={Slider}/>
        <Route path='/infiniteSlider' component={InfiniteSlider}/>
        <Route path='/infiniteScroll' component={InfiniteScroll}/>
        <Route path='/test' component={Test}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
