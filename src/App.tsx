import backgroundImg from "./imgs/Web/WEB_3840x2160.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./pages/Home/Home.page";
import { useRef } from "react";

import React, { FC, useMemo } from "react";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

export const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

export const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

export const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
export const connection = new anchor.web3.Connection(rpcHost);

export const startDateSeed = parseInt(
  process.env.REACT_APP_CANDY_START_DATE!,
  10
);

export const txTimeout = 30000; // milliseconds (confirm this works for your project)

function App() {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    []
  );
  // scroll functions
  const homeRef: React.MutableRefObject<any> = useRef(null);
  const buyAnApeRef: React.MutableRefObject<any> = useRef(null);
  const roadMapRef: React.MutableRefObject<any> = useRef(null);
  const teamRef: React.MutableRefObject<any> = useRef(null);

  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToBuyAnApeRef = () =>
    buyAnApeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToRoadMap = () =>
    roadMapRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTeam = () =>
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={wallets}>
        <WalletDialogProvider>
          <div className="App">
            <div className="App_container">
              <Navbar
                scrollToHome={scrollToHome}
                scrollToBuyAnApeRef={scrollToBuyAnApeRef}
                scrollToRoadMap={scrollToRoadMap}
                scrollToTeam={scrollToTeam}
                homeRef={homeRef}
              />
              <img
                src={backgroundImg}
                alt="header_hero"
                className="header_hero"
              />
              <Home
                candyMachineId={candyMachineId}
                config={config}
                connection={connection}
                startDate={startDateSeed}
                treasury={treasury}
                txTimeout={txTimeout}
                buyAnApeRef={buyAnApeRef}
                roadMapRef={roadMapRef}
                teamRef={teamRef}
                scrollToHome={scrollToHome}
              />
            </div>
          </div>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
