export default function TopBar({ title, subtitle, children }) {
  return (
    <header className="flex flex-row items-center justify-between pb-10 align-middle">
      <div className="flex flex-col">
        <h2 className="font-britanicaBold">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="flex flex-row gap-6">{children}</div>
    </header>
  );
}
