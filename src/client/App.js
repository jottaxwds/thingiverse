import React, { lazy, Suspense } from 'react';
import { Global } from '@emotion/core';

import SuspenseSpinner from 'common/components/Spinner/SuspenseSpinner';

import { global as GlobalStyles } from 'common/styles/global';

const Screen = lazy(() => import('common/containers/ScreenExample/Screen'));

import { AppStyles, AppContainer, AppContent, AppSection } from './styles';

const App = () => (
  <AppContainer>
    <Global styles={[GlobalStyles, AppStyles]} />
    <AppContent>
      <SuspenseSpinner>
        <Screen />
      </SuspenseSpinner>
    </AppContent>
  </AppContainer>
);

export default App;
