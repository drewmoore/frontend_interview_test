import fetch from 'isomorphic-fetch';

export default class AdvertisementsActions {
  static get FETCH_ADVERTISEMENTS() { return 'FETCH_ADVERTISEMENTS'; }

  static fetch() {
    const self   = this;
    const action = { type: self.FETCH_ADVERTISEMENTS };
    return (dispatch) => {
      dispatch(action);
      // TODO: replace with current host and port if in production
      return fetch('//localhost:8080/advertisements')
        .then(response => { return response.json(); })
        .then(json => dispatch(self.receiveAdvertisements(json)))
        .catch(error => dispatch(self.receiveAdvertisements({ error })));
    };
  }

  static receiveAdvertisements(json) {
    const action = {
      type: this.FETCH_ADVERTISEMENTS,
    };
    if (json.error) {
      action.status = 'error';
    } else {
      action.status         = 'success';
      action.advertisements = json.data || [];
    }
    return action;
  }
};
