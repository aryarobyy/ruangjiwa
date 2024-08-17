import { cn } from '@/utils/twMerge';

export default function Button({ children, className, type, value, onClick, disabled, ...props }) {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      value={value}
      className={cn(
        disabled ? 'cursor-not-allowed' : 'hover:bg-buttonBgPrimaryHover ring-2 outline-none ring-emerald-600',
        'rounded bg-buttonBgPrimary px-3 py-1.5 text-sm font-medium text-white outline-none transition-all',
        'focus:ring-2 focus:ring-emerald-700',
        className,
      )}
    >
      {children}
    </button>
  );
}

Button.secondary = ({ children, className, type, value, onClick, disabled, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        disabled ? 'cursor-not-allowed' : '  bg-neutral-700 ring-2 hover:bg-neutral-700 ring-neutral-800 rounded px-3 py-1.5 text-sm font-medium text-neutral-200 outline-none transition-all',
        '',
        'focus:ring-2 ',
        className,
      )}
    >
      {children}
    </button>
  );
};

Button.tertary = ({ children, className, type, value, onClick, disabled, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        disabled ? 'cursor-not-allowed' : 'hover:bg-neutral-100 ',
        'rounded px-3 py-1.5 text-sm font-medium text-emerald-600 ring-2 ring-emerald-600 hover:bg-buttonBgPrimary  hover:text-slate-100 outline-none transition-all',
        'focus:ring-2 focus:ring-emerald-600',
        className,
      )}
    >
      {children}
    </button>
  );
};

Button.success = ({ children, className, type, value, onClick, disabled, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      value={value}
      className={cn(
        disabled ? 'cursor-not-allowed' : 'hover:bg-buttonBgPrimaryHover',
        'rounded bg-buttonBgPrimary px-3 py-1.5 text-sm font-medium text-white outline-none transition-all',
        'focus:ring-2 focus:ring-primaryHover',
        className,
      )}
    >
      {children}
    </button>
  );
};

Button.danger = ({ children, className, type, value, onClick, disabled, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      value={value}
      className={cn(
        disabled ? 'cursor-not-allowed' : 'hover:bg-red-700 dark:hover:bg-red-700',
        'rounded bg-red-600 px-3 py-1.5 ring-2 ring-red-600 text-sm font-medium text-white outline-none transition-all dark:bg-red-600',
        'focus:ring-2 focus:ring-red-400',
        className,
      )}
    >
      {children}
    </button>
  );
};