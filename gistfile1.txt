Tailwind Button
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

export type TwButtonProps = {
  profile?:
    | 'primary'
    | 'primary-light'
    | 'secondary'
    | 'secondary-light'
    | 'darken'
    | 'darken-light'
    | 'danger'
    | 'danger-light';
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'x-large' | 'large' | 'medium' | 'small' | 'x-small';
  onClick?: (event?: any) => void;
  href?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
};

export const TwButton = ({
  profile,
  variant,
  size,
  href,
  fullWidth,
  rounded,
  disabled,
  children,
  startIcon,
  endIcon,
  className,
  onClick,
}: TwButtonProps) => {
  const Component = href ? Link : 'button';
  return (
    <Component
      href={href}
      onClick={onClick}
      className={twMerge(
        variants({
          profile,
          variant,
          size,
          fullWidth,
          rounded,
          disabled,
        }),
        className,
      )}
    >
      {startIcon && startIcon}
      {children && <span>{children}</span>}
      {endIcon && endIcon}
    </Component>
  );
};

const variants = cva(
  'flex items-center justify-center gap-1 transition duration-300 font-semibold !border rounded [&_span]:pt-[1px] [&_span]:pb-[3px] [&_path]:transition [&_path]:duration-300',
  {
    variants: {
      profile: {
        primary: 'bg-blue-500 hover:bg-blue-600  text-white hover:text-white',
        'primary-light': 'bg-blue-200 hover:bg-blue-500  text-blue-500 hover:text-white ',
        secondary: 'bg-orange-500 hover:bg-orange-600 text-white !border hover:text-white',
        'secondary-light': 'bg-orange-200 hover:bg-orange-500 text-orange-500 hover:text-white',
        darken: 'bg-neutral-700 hover:bg-neutral-800 text-white hover:text-white',
        'darken-light': 'bg-neutral-75 hover:bg-neutral-800 hovertext-neutral-800 hover:text-white',
        danger: 'bg-red-500 text-white hover:bg-red-600 hover:text-white',
        'danger-light': 'bg-red-50 hover:bg-red-500 text-red-500 hover:text-white',
      },
      variant: {
        contained: '!border-transparent',
        outlined: 'bg-transparent',
        text: 'bg-transparent !border-transparent hover:bg-transparent',
      },
      size: {
        'x-large': 'py-[11px] !px-6 text-[16px] leading-[20px] font-semibold  ',
        large: 'py-[7px] !px-5 text-[14px] leading-[20px] font-semibold',
        medium: 'py-[5px] !px-4 text-[14px] leading-[18px] font-medium',
        small: 'py-[3px] !px-3 text-[12px] leading-[16px] font-medium',
        'x-small': 'py-0.5 !px-2 text-[12px] leading-[16px] font-medium',
      },
      disabled: {
        true: 'pointer-events-none',
        false: null,
      },
      fullWidth: {
        true: 'w-full text-center',
        false: null,
      },
      rounded: {
        true: '!rounded-full',
        false: null,
      },
    },
    compoundVariants: [
      {
        size: ['x-large', 'large'],
        class: '[&_svg]:w-6 [&_svg]:h-6 gap-2',
      },
      {
        size: ['medium', 'small'],
        class: '[&_svg]:w-5 [&_svg]:h-5',
      },

      {
        size: ['x-small'],
        class: '[&_svg]:w-4 [&_svg]:h-4',
      },

      {
        size: ['medium', 'x-small'],
        class: '[&_span]:pt-[0px] [&_span]:pb-[2px]',
      },
      {
        profile: 'primary',
        variant: 'outlined',
        class:
          ' hover:bg-blue-200 hover:!border-blue-200 !border-blue-500 text-blue-500 hover:text-blue-500',
      },
      {
        profile: 'secondary',
        variant: 'outlined',
        class:
          ' hover:bg-orange-200 hover:!border-orange-200 !border-orange-500 text-orange-500 hover:text-orange-500',
      },
      {
        profile: 'darken',
        variant: 'outlined',
        class:
          'text-neutral-700 !border-neutral-700 hover:bg-neutral-75 hover:text-neutral-800 hover:!border-neutral-75',
      },
      {
        profile: 'danger',
        variant: 'outlined',
        class:
          ' !border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500 hover:!border-red-50',
      },
      {
        profile: 'primary',
        variant: 'text',
        class: '  text-blue-500 hover:!border-blue-500 hover:text-blue-500',
      },
      {
        profile: 'secondary',
        variant: 'text',
        class: ' text-orange-500 hover:!border-orange-500 hover:text-orange-500',
      },
      {
        profile: 'darken',
        variant: 'text',
        class: ' text-neutral-800 hover:!border-neutral-700 hover:text-neutral-800  ',
      },
      {
        profile: 'danger',
        variant: 'text',
        class: ' text-red-500 hover:!border-red-500 hover:text-red-500',
      },

      //DISABLED

      {
        profile: 'primary',
        disabled: true,
        class: 'bg-blue-400',
      },
      {
        profile: 'primary',
        variant: 'outlined',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'primary',
        variant: 'text',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'primary-light',
        disabled: true,
        class: 'bg-blue-100 text-blue-400',
      },
      {
        profile: 'secondary',
        disabled: true,
        class: 'bg-orange-250',
      },
      {
        profile: 'secondary',
        variant: 'outlined',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'secondary',
        variant: 'text',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'secondary-light',
        disabled: true,
        class: 'bg-orange-100 text-orange-250',
      },
      {
        profile: 'darken',
        disabled: true,
        class: 'bg-neutral-400',
      },
      {
        profile: 'darken',
        variant: 'outlined',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'darken',
        variant: 'text',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'darken-light',
        disabled: true,
        class: 'bg-neutral-75 text-neutral-500',
      },
      {
        profile: 'danger',
        disabled: true,
        class: 'bg-red-201',
      },
      {
        profile: 'danger',
        variant: 'outlined',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'danger',
        variant: 'text',
        disabled: true,
        class: 'bg-transparent',
      },
      {
        profile: 'danger-light',
        disabled: true,
        class: 'bg-red-50 text-red-201',
      },

      //ICON COLOR

      {
        profile: 'primary',
        class: '[&_path]:fill-white',
      },

      {
        profile: 'primary-light',
        class: '[&_path]:fill-blue-500 [&_path]:hover:fill-white ',
      },

      {
        profile: 'primary',
        variant: ['outlined', 'text'],
        class: '[&_path]:fill-blue-500',
      },

      {
        profile: 'secondary',
        class: '[&_path]:fill-white',
      },

      {
        profile: 'secondary-light',
        class: '[&_path]:fill-orange-500 [&_path]:hover:fill-white ',
      },

      {
        profile: 'secondary',
        variant: ['outlined', 'text'],
        class: '[&_path]:fill-orange-500',
      },

      {
        profile: 'darken',
        class: '[&_path]:fill-white',
      },

      {
        profile: 'darken-light',
        class: '[&_path]:fill-neutral-800 [&_path]:hover:fill-white ',
      },

      {
        profile: 'darken',
        variant: ['outlined'],
        class: '[&_path]:fill-neutral-700',
      },

      {
        profile: 'darken',
        variant: ['text'],
        class: '[&_path]:fill-neutral-800',
      },

      {
        profile: 'danger',
        class: '[&_path]:fill-white',
      },

      {
        profile: 'danger-light',
        class: '[&_path]:fill-red-500 [&_path]:hover:fill-white ',
      },

      {
        profile: 'danger',
        variant: ['outlined', 'text'],
        class: '[&_path]:fill-red-500',
      },
    ],
    defaultVariants: {
      profile: 'primary',
      size: 'medium',
      variant: 'contained',
    },
  },
);