import RESTClient from './RESTClient';

const BASE_URL = `http://localhost:${process.env.SERVER_PORT || 9001}`;

const client = new RESTClient({ baseURL: BASE_URL });

const DEFAULT_VALUE = 'abcd1234';

/**
 * It consumes the Rest client methods
 */
const API = {
  testGetMethod: ({ myParameter = DEFAULT_VALUE }) =>
    client.get(`/api/test/test/${myParameter}`)
};

export default API;
