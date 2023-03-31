import "../styles/globals.scss";
import { Outfit } from "next/font/google";
import Footer from "../componentes/masters/footer/footer";
import Header from "../componentes/masters/header/header";
import AdminHeader from "../componentes/admin/masters/header/headerAdmin";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store/store";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function App({ Component, pageProps, router }) {
  const showHeader = !router.pathname.startsWith('/admin');
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <style jsx global>{`
            :root {
              /* ... */
              --outfit-font: ${outfit.style.fontFamily};
            }
          `}</style>
          {showHeader && <Header />}
          {!showHeader && <AdminHeader />}
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
