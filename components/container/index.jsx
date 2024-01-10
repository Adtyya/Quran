export default function Container({ children, className }) {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>{children}</div>
  );
}
