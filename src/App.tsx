import React from "react";
import { ConnectedRouter } from 'connected-react-router'
import { history } from './reducks/store/store'
import Router from './Router'

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <div className="c-main">
        <Router />
      </div>
    </ConnectedRouter>
  );
};

export default App;
