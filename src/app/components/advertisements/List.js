import React, { Component }       from 'react';
import AdvertisementItemContainer from '../../containers/advertisements/Item.js';

export default class AdvertisementsList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.isFetching &&
          <div className="col-xs-12 text-center well well-lg">
            <span>Biete Warten Sie als wir Immobilien Finden ...</span>
          </div>
        }
        {!!this.props.error &&
          <div className="col-xs-12">
            <strong className="alert">{this.props.error}</strong>
          </div>
        }
        {this.props.advertisements.map(advertisement => (
          <AdvertisementItemContainer key={advertisement.id} {...advertisement} />
        ))}
      </div>
    )
  }

  componentWillMount() {
    if (!this.props.advertisements.length && !this.props.isFetching) {
      this.props.fetchAdvertisements();
    }
  }
}
