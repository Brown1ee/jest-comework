import React from 'react';
import PropTypes from 'prop-types';

import './PageTitle.scss'

const PageTitle = ({ label }) => (
  <h1 className="page-title" data-testid="page-title">
    {label}
  </h1>
);

PageTitle.propTypes = {
  label: PropTypes.node.isRequired,
};

export default PageTitle;
