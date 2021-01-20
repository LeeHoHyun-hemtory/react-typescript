import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Main from './Main';
import Pagination from './Pagination';
import FireBaseEX from './FireBaseEX';
import Test from './Test';
import Slider from './Slider';
import InfiniteSlider from './InfiniteSlider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact/>
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
