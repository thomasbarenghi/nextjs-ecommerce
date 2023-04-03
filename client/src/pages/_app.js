import "../styles/globals.scss";
import { Outfit } from "next/font/google";
import { Footer, Header, AdminHeader, AdminFooter } from "@/componentes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store/store";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function App({ Component, pageProps, router }) {
  const showHeader = !router.pathname.startsWith("/admin");
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
          {showHeader && <Footer />}
          {!showHeader && <AdminFooter />}
        </PersistGate>
      </Provider>
    </>
  );
}
