import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Badges from "./pages/Badges";
import BadgeNew from "./pages/BadgeNew";
import BadgeEdit from "./pages/BadgeEdit";
import RickAndMorty from "./pages/RickAndMorty";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/rickandmorty" component={RickAndMorty} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
