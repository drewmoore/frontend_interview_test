import fetch from 'isomorphic-fetch';

// General helper for making HTTP requests. This allows for the stubbing of
// requests with sinon when testing.
export default class RequestHelper {
  static fetch(url, options) { return fetch(url, options); }
}
