import React from 'react';
import AdvertisementsListContainer from '../containers/advertisements/List.js';
import '../style.scss';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2" />
      <div className="col-xs-12 col-md-8">
        <AdvertisementsListContainer />
      </div>
    </div>
  </div>
);

export default App;
