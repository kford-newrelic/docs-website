import React, { useState } from 'react';
import { css } from '@emotion/react';

import useViewToggleContext from './useViewToggleContext';

const ToggleSelector = () => {
  return (
    <>
      <ToggleButtons />
    </>
  );
};

const ToggleButtons = () => {
  const [currentView, setCurrentView] = useViewToggleContext();

  const TOGGLE_VIEWS = {
    newUserView: 'new-user-view',
    defaultView: 'default-view',
  };

  console.log('current', currentView);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCurrentView(TOGGLE_VIEWS.newUserView);
          console.log('toggle new user', currentView);
        }}
        css={css`
          &:hover {
            color: var(--primary-text-color);
          }

          ${currentView === TOGGLE_VIEWS.newUserView &&
          css`
            color: var(--primary-text-color);
            border-bottom: var(--brand-button-primary-accent) solid 3px;

            .dark-mode & {
              border-bottom: var(--brand-button-primary-accent-hover) solid 3px;
            }
          `}
        `}
      >
        NewUserView
      </button>

      <button
        type="button"
        onClick={() => {
          setCurrentView(TOGGLE_VIEWS.defaultView);
          console.log('toggle default', currentView);
        }}
        css={css`
          &:hover {
            color: var(--primary-text-color);
          }

          ${currentView === TOGGLE_VIEWS.defaultView &&
          css`
            color: var(--primary-text-color);
            border-bottom: var(--brand-button-primary-accent) solid 3px;

            .dark-mode & {
              border-bottom: var(--brand-button-primary-accent-hover) solid 3px;
            }
          `}
        `}
      >
        DefaultView
      </button>
    </>
  );
};

export default ToggleSelector;
