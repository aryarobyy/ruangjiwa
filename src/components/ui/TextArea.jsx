import { cn } from '@/utils/twMerge';

const Textarea = ({ className, value, onchange, ...props }) => {
  return (
    <textarea
      className={cn(
        'placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:ring-gray-500',
        'focus-visible:outline-none focus-visible:ring-1  disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      onChange={onchange}
      value={value}
      {...props}
    />
  );
};

export default Textarea;
