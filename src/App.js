import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';

const HomeView = lazy(() => import('./views/HomeView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
