import React from 'react';
import { render } from 'react-dom';
import Users from './Users';
import User from './User';
import LoadGraph from './LoadGraph';

const App = () => (
  <>
    <h1>Demo</h1>
    <LoadGraph />
    <Users />
    <User id={2} />
  </>
);

render(<App />, document.getElementById('root'));
