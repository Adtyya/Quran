export default function Paragraph({ children, className }) {
  return (
    <p className={`text-base text-gray-100 font-medium ${className}`}>
      {children}
    </p>
  );
}
