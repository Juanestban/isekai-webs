import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { IconButton, Image } from '@/packages/mercado-libre';

import s from './Carousel.module.css';

const IMAGES = Array.from({ length: 6 }).map((_, index) => ({
  id: index,
  link: `/meli/banners/banner_${index + 1}.webp`,
}));

const DEFALT_VALUES = {
  current: 0,
  maxWidth: 1920,
  transform: '',
  isMoving: false,
};

const Carousel = () => {
  const [info, setInfo] = useState(DEFALT_VALUES);
  const [isClicked, setIsClicked] = useState(false);
  const [images, setImages] = useState(IMAGES);
  const intervalId = useRef<null | number>(null);

  const memo = useMemo(
    () => ({
      next: (current: number) => {
        setInfo((preInfo) => ({
          ...preInfo,
          transform: `translateX(-${preInfo.maxWidth}px)`,
          isMoving: true,
        }));

        window.setTimeout(() => {
          setInfo((prevInfo) => {
            const [prev, ...rest] = images;
            setImages([...rest, prev]);

            return {
              ...prevInfo,
              current,
              transform: '',
              isMoving: false,
            };
          });
        }, 500);
      },
      prev: (current: number) => {
        const last = images[images.length - 1];
        const rest = images.slice(0, -1);

        setImages([last, ...rest]);
        setInfo({
          ...info,
          current,
          transform: `translateX(-${info.maxWidth}px)`,
          isMoving: false,
        });

        window.setTimeout(() => {
          setInfo((prevInfo) => ({
            ...prevInfo,
            current,
            transform: '',
            isMoving: true,
          }));
        }, 10);

        window.setTimeout(() => {
          setInfo((prevInfo) => ({
            ...prevInfo,
            isMoving: false,
          }));
        }, 500);
      },
    }),
    [images, info],
  );

  const handleMove = useCallback(
    (direction: 'prev' | 'next', isClicked?: boolean) => () => {
      let current = info.current;
      const { next, prev } = memo;
      if (isClicked) {
        setIsClicked(true);
      }

      if (direction === 'next') {
        current += 1;

        if (current > images.length - 1) {
          current = 0;
        }

        next(current);
        return;
      }
      current -= 1;

      if (current < 0) {
        current = images.length - 1;
      }

      prev(current);
    },
    [images, info, memo],
  );

  useEffect(() => {
    let timeout: number;

    if (isClicked) {
      timeout = window.setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [isClicked]);

  useEffect(() => {
    const click = handleMove('next');

    if (!isClicked) {
      intervalId.current = window.setInterval(() => {
        click();
      }, 3000);
    }

    return () => {
      if (intervalId.current) {
        window.clearInterval(intervalId.current);
      }
    };
  }, [isClicked, handleMove]);

  return (
    <section className={s.slider}>
      <div className={s.sliderInner}>
        {images.map(({ id, link }) => (
          <div
            key={id}
            className={clsx(s.wrapperImg, info.isMoving && s.slideTransition)}
            style={{ transform: info.transform }}
          >
            <Link to="/meli">
              <Image
                loading="eager"
                src={link}
                className={s.img}
                alt={`mercado libre carousel/sliders ${id}`}
              />
            </Link>
          </div>
        ))}
        <IconButton
          icon="GoChevronLeft"
          size={25}
          className={clsx(s.button, s.left)}
          onClick={handleMove('prev', true)}
        />
        <IconButton
          icon="GoChevronRight"
          size={25}
          className={clsx(s.button, s.right)}
          onClick={handleMove('next', true)}
        />
        <div className={s.pagination}>
          {IMAGES.map(({ id }, index) => (
            <span key={index} className={clsx(s.selector, id === info.current && s.selected)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Carousel };
