/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import MyCustomPlugin from '../../components/MyCustomPlugin'


const HomePage = () => {
  return (
    <div>
    < MyCustomPlugin />
    </div>
  );
};

export default memo(HomePage);
