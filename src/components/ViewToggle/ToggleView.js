import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useViewToggleContext from './useViewToggleContext';
import ToggleViewContext from '@newrelic/gatsby-theme-newrelic/src/components/Context';

const ToggleView = ({ children, id }) => {
  const [currentView] = useViewToggleContext();
  console.log('toggle view', currentView, id);
  return (
    <div
      id={id}
      css={
        !(id === currentView) &&
        css`
          height: 0px;
          overflow: hidden;
        `
      }
    >
      {children}
    </div>
  );
};

ToggleView.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ToggleView;
