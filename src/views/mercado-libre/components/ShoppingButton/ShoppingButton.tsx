import { SVGProps } from 'react';

const ShoppingButton = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <button className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="var(--font-color-black)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        aria-hidden="true"
        data-icon="SvgShoppingCart"
        {...props}
      >
        <path d="M20.112 19.4a1.629 1.629 0 1 1-1.629-1.629 1.63 1.63 0 0 1 1.629 1.629zM9.941 17.768a1.629 1.629 0 1 0 1.628 1.632 1.629 1.629 0 0 0-1.628-1.632zM3 3.006h1.678a2.113 2.113 0 0 1 1.965 1.573l2.051 9.152a2.114 2.114 0 0 0 1.965 1.574h6.788a2.153 2.153 0 0 0 1.989-1.568L20.957 8.8a1.233 1.233 0 0 0-1.236-1.588L11.4 7.064" />
      </svg>
    </button>
  );
};
export { ShoppingButton };
