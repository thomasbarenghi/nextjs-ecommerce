export default function ButtonPrimary({ children, onClick, type, label }) {
  return (
    <button
      className="rounded-xl bg-violet-800 px-4 py-2 font-britanicaBold text-white"
      type={type}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
}
