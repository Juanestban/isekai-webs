import { lazy, PropsWithChildren, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MeliPage = /** @__React_Component */ lazy(() => import('@/views/mercado-libre/Home'));
const AmazonPage = /** @__React_Component */ lazy(() => import('@/views/amazon/Home'));

const AppRoute = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/meli" element={<MeliPage />} />
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="*" element={<>{children}</>} />
      </Routes>
    </Suspense>
  );
};

export { AppRoute };
