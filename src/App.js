import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';

import { LoginPage } from './pages/Login/LoginPage';
import { MenuPage } from './pages/Menu/MenuPage';
import { OrderPage } from './pages/Order/OrderPage';


function App() {
  const [switchPage, setSwitchPage] = useState('LoginPage');
  const onSwitchPageHandler = e => {
    setSwitchPage(e)
  }
  return (
    <>
      <Header />
      {switchPage && switchPage === 'MenuPage' && (<MenuPage />)}
      {switchPage && switchPage === 'OrderPage' && (<OrderPage />)}
      {switchPage && switchPage === 'LoginPage' && (<LoginPage />)}
      <Footer onSwitchPage={onSwitchPageHandler}/>
    </>
  );
}

export default App;
