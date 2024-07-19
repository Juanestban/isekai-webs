import { Outlet } from 'react-router-dom';

import { ThemeProvider, Container } from '@/packages/mercado-libre';
import { Header } from './components';

import s from './MeliRoute.module.css';

function MeliRoute() {
  return (
    <ThemeProvider>
      <div className={s.root}>
        <Header />
        <Container className={s.wrapper}>
          <main>
            <Outlet />
          </main>
          {/* footer */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default MeliRoute;
