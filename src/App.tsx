import React, { Suspense } from 'react';
import './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from 'src/pages/home-page';
import { SomePage } from './pages/some-page';

import { AppRoutes } from 'src/constants/routes';
import { Layout } from './components/Layout';

function App(): JSX.Element {
  return (
    <Suspense fallback={'Loading...'}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={AppRoutes.Root} component={HomePage} />
            <Route path={AppRoutes.SomePage} component={SomePage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
