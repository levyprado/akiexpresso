export default function QuantityButton({ onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className='rounded-lg bg-brand p-1 text-white transition-transform active:translate-y-0.5'
    >
      {icon}
      <span className='sr-only'>{label}</span>
    </button>
  )
}
