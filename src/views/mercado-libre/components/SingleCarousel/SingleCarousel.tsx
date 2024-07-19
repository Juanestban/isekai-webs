import { PropsWithChildren, useState } from 'react';
import clsx from 'clsx';

import { IconButton } from '@/packages/mercado-libre';

import s from './SingleCarousel.module.css';

const SingleCarousel = ({ children }: PropsWithChildren) => {
  const [info, setInfo] = useState({ isStarting: true, transform: '' });

  const handleClick = (direction: 'next' | 'prev') => () => {
    if (direction === 'next') {
      setInfo({ isStarting: false, transform: 'translateX(calc(199.33px * -2))' });
      return;
    }

    setInfo({ isStarting: true, transform: '' });
  };

  return (
    <>
      <section className={s.sectionCards}>
        <div className={s.cards} style={{ transform: info.transform }}>
          {children}
        </div>
      </section>
      <IconButton
        icon={info.isStarting ? 'GoChevronRight' : 'GoChevronLeft'}
        className={clsx(s.button, s[info.isStarting ? 'right' : 'left'])}
        onClick={handleClick(info.isStarting ? 'next' : 'prev')}
        rounded
      />
    </>
  );
};

export { SingleCarousel };
