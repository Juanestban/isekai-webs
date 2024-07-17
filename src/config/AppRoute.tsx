import { lazy, PropsWithChildren, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MeliRoute = /** @__lazy_component */ lazy(() => import('@/views/mercado-libre/MeliRoute'));
const MeliHomePage = /** @__lazy_component */ lazy(() => import('@/views/mercado-libre/Home'));
const AmazonPage = /** @__lazy_component */ lazy(() => import('@/views/amazon/Home'));

const AppRoute = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/meli" element={<MeliRoute />}>
          <Route path="" element={<MeliHomePage />} />
        </Route>
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="*" element={<>{children}</>} />
      </Routes>
    </Suspense>
  );
};

export { AppRoute };
