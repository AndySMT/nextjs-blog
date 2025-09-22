// _app.js --> componente React di livello superiore che avvolge tutte le pagine

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
