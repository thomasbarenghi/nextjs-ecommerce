export default function Island({ children }) {
  return (
    <section className="flex flex-col rounded-xl bg-white p-7 shadow-md shadow-violet-100">
      {children}
    </section>
  );
}
