import { FC, ComponentProps, Ref, FormEvent } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon';

import s from './Search.module.css';

type PrimitiveProps = Omit<ComponentProps<'input'>, 'ref' | 'onSubmit'>;

interface SearchProps extends PrimitiveProps {
  innerRef?: Ref<HTMLInputElement>;
  fullWidth?: boolean;
  onSubmit?: (text: string) => void;
}

const Search: FC<SearchProps> = ({ innerRef, fullWidth, onSubmit, className, ...props }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    const { search } = data;

    onSubmit?.(search as string);
  };

  return (
    <form className={clsx(s.search, fullWidth && s.fullWidth)} onSubmit={handleSubmit}>
      <input name="search" ref={innerRef} className={clsx(s.input, className)} {...props} />
      <button type="submit" className={s.searchIconButton}>
        <Icon name="GoSearch" />
      </button>
    </form>
  );
};

export { Search };
export type { SearchProps };
