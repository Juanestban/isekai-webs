import { CardEcosys, Carousel, SingleCarousel } from '@/views/mercado-libre/components';

import { CARDS as cards } from '@/views/mercado-libre/constants';

import s from './Home.module.css';

function Home() {
  return (
    <>
      <Carousel />
      <div className={s.wrap}>
        <div className={s.container}>
          <SingleCarousel>
            {cards.map(({ title, description, link, alt, label, src }) => (
              <CardEcosys
                title={title}
                description={description}
                link={link}
                alt={alt}
                label={label}
                src={src}
              />
            ))}
          </SingleCarousel>
        </div>
      </div>
    </>
  );
}

export default Home;
