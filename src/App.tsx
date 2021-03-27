import React from "react";
import Router from './Router'
import { Header}  from './components/Header'
import { Footer } from './components/UIkit'

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
