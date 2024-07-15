import { FC, Ref, memo, ComponentProps } from 'react';
import clsx from 'clsx';

import { Text } from '../Text';
import { Image } from '../Image';
import { Heading } from '../Heading';

import s from './Card.module.css';
import { Link } from '../Link';

type PrimitiveCardProps = Omit<ComponentProps<'div'>, 'ref' | 'children'>;

interface CardProps extends PrimitiveCardProps {
  innerRef?: Ref<HTMLDivElement>;
  src?: string;
  link?: string;
  title?: string;
  priceBefore?: number;
  price?: number;
  discount?: number;
  content?: string;
  alt?: string;
  external?: boolean;
  isFreeShipping?: boolean;
}

const Card: FC<CardProps> = memo(
  ({
    innerRef,
    alt,
    src,
    title = '',
    content = '',
    discount = 0,
    link,
    price = 0,
    priceBefore,
    external,
    isFreeShipping,
    className,
    ...props
  }) => {
    return (
      <Link to={link} variant="secondary" external={external}>
        <div ref={innerRef} className={clsx(s.card, className)} {...props}>
          <picture className={s.picture}>
            <Image src={src} alt={alt} width={150} height={150} fit="contain" />
          </picture>
          <Text as="span" className={s.title} size="sm">
            {title}
          </Text>
          <div className={s.wrapperPrices}>
            {priceBefore && (
              <Text className={s.priceBefore} color="base" style={{ fontSize: 12 }}>
                $ {priceBefore}
              </Text>
            )}
            <div className={s.contentPrices}>
              <Heading as="h3" size="4xl">
                $ {price}
              </Heading>
              {discount > 0 && (
                <Text as="span" className={s.discount} color="green">
                  {discount}% off
                </Text>
              )}
            </div>
            {content && (
              <Text as="span" size="sm">
                {content}
              </Text>
            )}
          </div>
          {isFreeShipping && (
            <Text size="sm" weight="semi-bold" color="green">
              Envío gratis
            </Text>
          )}
        </div>
      </Link>
    );
  },
);

export { Card };
export type { CardProps };
