import React from "react";
import Router from './Router'
import { Header}  from './components/Header'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="c-main">
        <Router />
      </div>
    </React.Fragment>
  );
};

export default App;
