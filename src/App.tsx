import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./pages/Header";
import { IndexPage } from "./pages/index/component";

function App() {
  return (
    <>
      <Header/>

      <Switch>
        <Route path="/" exact render={() => <IndexPage />}/>
        <Route path="/ads" render={() => <>Объявления</>}/>
        <Route path="/profile" render={() => <>Профиль</>}/>
      </Switch>
    </>
  );
}

export default App;
