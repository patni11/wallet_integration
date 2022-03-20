import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "../styles/globals.css";
import "../styles/index.css";
Web3ReactProvider;

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />;
    </Web3ReactProvider>
  );
}

export default MyApp;
