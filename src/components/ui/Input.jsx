// import * as React from 'react';

import { cn } from '@/utils/twMerge';
import { forwardRef } from 'react';


const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-neutral-500 dark:bg-neutral-900',
        'border-neutral-300 ring-offset-white dark:border-neutral-700 dark:ring-offset-neutral-900',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
