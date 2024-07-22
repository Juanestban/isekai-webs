import clsx from 'clsx';

import { Button, Content, Heading } from '@/packages/mercado-libre';
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
        <Content alignment="column" className={s.section}>
          <header className={s.header}>
            <Heading as="h2" size="2xl" weight="semi-bold">
              Inspirado en lo último que viste
            </Heading>
            <>bread</>
          </header>
          <SingleCarousel>
            {/* cards */}
            --- Cards ---
          </SingleCarousel>
        </Content>
        {/* disney plus */}
        <Content alignment="column" className={clsx(s.section, s.sectionv2)}>
          <header className={clsx(s.header, s.bg)}>
            <Heading as="h2" size="2xl" weight="semi-bold" color="white">
              Suscríbete al nivel 6 por <span>$ 75.031</span> $ 29.990/mes
            </Heading>
            <Button role="tertiary">Suscríbete</Button>
          </header>
          <div className={s.body}>
            <Heading as="h3" size="xl" weight="semi-bold" style={{ padding: '10px 0 20px 0' }}>
              Consigue los mejores beneficios en Mercado Libre
            </Heading>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>(icono) Disney+ incluido</div>
              <div>
                (icono) Envíos gratis y rápidos desde $ 60.000 y 40% OFF en envíos de menos de $
                60.000
              </div>
            </div>
          </div>
        </Content>
        {/*  */}
        mercado-play
        {/*  */}
        <Content alignment="column" className={s.section}>
          <header className={s.header}>
            <Heading as="h2" size="2xl" weight="semi-bold">
              Relacionado con tus visitas en Consolas y Videojuegos
            </Heading>
            <>bread</>
          </header>
        </Content>
        <Content alignment="column" className={s.section}>
          <header className={s.header}>
            <Heading as="h2" size="2xl" weight="semi-bold">
              Elegidos para ti en Celulares y Teléfonos
            </Heading>
            <>bread</>
          </header>
        </Content>
      </div>
    </>
  );
}

export default Home;
