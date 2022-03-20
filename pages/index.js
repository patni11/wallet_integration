import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { wallets } from "../components/wallet/connectors";

export default function Home() {
  const [popup, setPopUp] = useState("none");

  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
  } = useWeb3React();

  const connect = async (wallet) => {
    try {
      await activate(wallet);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wallet-wrapper">
        {active ? (
          <span className="text"> Connected </span>
        ) : (
          <span className="text"> You are not connected to a wallet </span>
        )}

        {!active ? (
          <button
            className="button popup-button"
            onClick={() => {
              setPopUp("block");
            }}
          >
            {" "}
            Connect To A Wallet{" "}
          </button>
        ) : (
          <button className="button popup-button" onClick={deactivate}>
            Disconnect
          </button>
        )}
      </div>
      <div
        className="popup-wrapper"
        style={{ display: popup }}
        onClick={() => {
          setPopUp("none");
        }}
      >
        <div className="wallets">
          <div className="wallets-list">
            {wallets.map((wallet_object) => {
              return (
                <div>
                  <button
                    onClick={() => connect(wallet_object.object)}
                    className="button"
                  >
                    {" "}
                    {wallet_object.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
