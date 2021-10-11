import React from 'react';
import { render } from 'react-dom';
import Users from './Users';

const App = () => (
  <>
    <h1>Demo</h1>
    <Users />
  </>
);

render(<App />, document.getElementById('root'));
