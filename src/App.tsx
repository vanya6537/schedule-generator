import React, { Suspense } from 'react';
import './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from 'src/pages/home-page';
import { AppRoutes } from 'src/constants/routes';

function App(): JSX.Element {
  return (
    <Suspense fallback={'Loading...'}>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.Root} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
