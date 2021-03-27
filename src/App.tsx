import React from "react";
import Router from './Router'
import { Helmet } from "react-helmet";
import { Header}  from './components/Header'
import { Footer } from './components/UIkit'

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Helmet
      title={'TodoHub |タスクを管理、蓄積でやる気アップ'}
      meta={[
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:image', content: './assets/img/twitterCard.jpg' },
        { property: 'og:title', content: 'TodoHub' },
        { property: 'og:description', content: 'タスクを管理、評価、積み上げができるサービスです。日々こなしていくタスクを可視化できるため、たくさんのタスクを毎日消費する中で下がるモチベーションをアップさせることができます。' },
        { property: 'og:url', content: 'https://todohub.net' }
      ]}
    />
      <Header />
      <main className='main'>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
