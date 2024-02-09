import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { ThemeProvider } from 'next-themes';
import { Layout } from './Layout';
import { Kanji } from './pages/Kanji';

const App = () => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/kanji' element={<Kanji />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export { App };
