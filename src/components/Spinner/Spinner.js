import React from 'react';

import './Spinner.scss'

const Spinner = () => (
  <div className="lds-ellipsis" data-testid="spinner">
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
