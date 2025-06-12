export function Button({ children, onClick, variant = "default" }) {
  const base = "px-3 py-1 rounded border";
  const styles =
    variant === "outline"
      ? "border-gray-400 text-gray-700"
      : "bg-blue-500 text-white";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
