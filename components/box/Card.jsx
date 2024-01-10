export default function Card({ children, className }) {
  return (
    <div
      className={`bg-slate-900 hover:bg-slate-700 duration-200 cursor-pointer text-white rounded p-3 ${className}`}
    >
      {children}
    </div>
  );
}
