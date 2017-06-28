import sinon         from 'sinon';
import path          from 'path';
import fs            from 'fs';
import RequestHelper from '../helpers/request';

// Stub all requests for advertisements from API. Read sample response
// stored on disk in json. Have fetch return this data in a promise.
export const stubFetch = () => {
  sinon.stub(RequestHelper, 'fetch');
  const sampleDataPath = path.join(__dirname, 'sampleResponse.json');
  const response = new window.Response(
    fs.readFileSync(sampleDataPath, 'utf8'),
    {
      status:  200,
      headers: { 'Content-type': 'application/json' }
    }
  );
  RequestHelper.fetch.returns(Promise.resolve(response));
};

// Restore fetch's original functionality.
export const restoreFetch = () => {
  RequestHelper.fetch.restore();
};
