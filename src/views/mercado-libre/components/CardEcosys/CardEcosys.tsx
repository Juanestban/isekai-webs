import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { Heading, Text, Image, Button } from '@/packages/mercado-libre';

import s from './CardEcosys.module.css';

// move the component to `packages` folder
interface CardEcosysProps {
  title?: string;
  src?: string;
  alt?: string;
  description?: string;
  label?: string;
  link?: string;
}

const CardEcosys: FC<CardEcosysProps> = ({
  title,
  description,
  label,
  src,
  alt,
  link = location.pathname,
}) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Link to={link} className={s.link}>
      <div className={s.container}>
        <header className={s.header}>
          <Heading as="h2" size="lg" weight="semi-bold">
            {title}
          </Heading>
        </header>
        <div className={s.wrapperIcon}>
          <Image src={src} alt={alt ?? `mercado libre card - ${title}`} width={105} height={105} />
        </div>
        <div className={s.description}>
          <Text as="span" size="sm" className={s.text}>
            {description}
          </Text>
        </div>
        <div className={s.action}>
          <Button role="secondary" className={s.button} onClick={handleClick} size="xs" fullWidth>
            {label}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export { CardEcosys };
export type { CardEcosysProps };
