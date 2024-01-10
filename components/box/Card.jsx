export default function Card({ children, className }) {
  return (
    <div className={`bg-slate-900 text-white rounded p-3 ${className}`}>
      {children}
    </div>
  );
}
