import React from 'react';
import AdvertisementsList from './advertisements/List.js';
import '../style.scss';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-2" />
      <div className="col-xs-8">
        <AdvertisementsList />
      </div>
      <div className="col-xs-2" />
    </div>
  </div>
);

export default App;
