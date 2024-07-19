import { Carousel } from '../../components';

import s from './Home.module.css';

function Home() {
  return (
    <>
      <Carousel />
      <div className={s.wrap}>
        <div className={s.container}>home page</div>
      </div>
    </>
  );
}

export default Home;
