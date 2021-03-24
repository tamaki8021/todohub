import React from "react";
import Router from './Router'
import { Header}  from './components/Header'
import { Footer } from './components/UIkit'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
