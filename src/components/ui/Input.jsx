// import * as React from 'react';

import { cn } from '@/utils/twMerge';
import { forwardRef } from 'react';


const Input = forwardRef(({ className, type, value, onChange, placeholder, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border bg-gray-200 px-3 py-2 text-sm placeholder:text-neutral-500 text-dark',
        'border-neutral-300 ring-offset-white ',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      placeholder={placeholder}
      ref={ref}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
