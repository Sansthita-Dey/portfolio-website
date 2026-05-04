const variants = {
  primary:
    'bg-gradient-accent text-white shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'border border-primary text-primary dark:border-primary dark:text-primary bg-transparent hover:bg-primary/10',
  ghost:
    'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary bg-transparent',
  outline:
    'border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:border-primary dark:hover:border-primary bg-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
