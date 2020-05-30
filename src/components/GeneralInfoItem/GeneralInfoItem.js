import React from 'react';
import PropTypes from 'prop-types';

import './GeneralInfoItem.scss'

const GeneralInfoItem = ({ label, text }) => (
  <div className="general-item">
    <div className="general-item__label">{label}</div>
    <div className="general-item__text">{text}</div>
  </div>
);

GeneralInfoItem.propTypes = {
  label: PropTypes.node.isRequired,
};

export default GeneralInfoItem;
