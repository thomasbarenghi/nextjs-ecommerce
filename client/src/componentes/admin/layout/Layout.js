import { AdminHeader } from "@/componentes";

export default function AdminLayout({ children }) {
  return (
    <main className="admin-layout flex justify-end">
      <AdminHeader />
      <main
        className="relative h-full w-5/6 px-12 py-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(221, 214, 254, 0.4) 0%, rgba(255, 229, 244, 0) 100%)",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
    </main>
  );
}
