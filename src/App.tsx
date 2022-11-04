import React, {Suspense} from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./pages/index/component";
import ProfilePage from "./pages/profile/component";
import AdsPage from "./pages/ads";

function App() {
  return (
      <Suspense fallback={<>Loading...</>}>
          <Switch>
              <Route path="/" render={() => <ProfilePage />}/>
              <Route path="/index" exact render={() => <IndexPage />}/>
              <Route path="/ads" render={() => <AdsPage />}/>
          </Switch>
      </Suspense>
  );
}

export default App;
