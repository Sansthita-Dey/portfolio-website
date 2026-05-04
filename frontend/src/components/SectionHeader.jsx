export default function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {label && (
        <p className="text-sm font-semibold tracking-widest uppercase mb-3
          text-primary dark:text-primary">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
