import React from 'react';
import { render } from 'react-dom';
import Users from './Users';
import User from './User';

const App = () => (
  <>
    <h1>Demo</h1>
    <Users />
    <User id={10} />
  </>
);

render(<App />, document.getElementById('root'));
