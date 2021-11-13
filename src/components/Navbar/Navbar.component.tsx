import "./Navbar.styles.css";
import logo from "../../imgs/BASC_Logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";

interface Props {
  scrollToHome: any;
  scrollToBuyAnApeRef: any;
  scrollToRoadMap: any;
  scrollToTeam: any;
  homeRef: any;
}
const ConnectButton = styled(WalletMultiButton)`
  padding: 5px 10px !important;
  background-color: transparent !important;
  border: 1px solid gray !important;
  transition: all 0.25s !important;
  &:hover {
    color: rgb(255, 255, 9) !important;
    box-shadow: unset;
  }
`;
const Navbar: React.FC<Props> = ({
  scrollToHome,
  scrollToBuyAnApeRef,
  scrollToRoadMap,
  scrollToTeam,
  homeRef,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar_container" ref={homeRef}>
      <img
        src={logo}
        alt="nav_logo"
        className="nav_logo"
        onClick={() => scrollToHome()}
      />
      <div className="routes_list ">
        <ConnectButton />
        <div className="routes_list ">
          <p className="mr_m route_item" onClick={() => scrollToBuyAnApeRef()}>
            buy an ape
          </p>
          <p className="mr_m route_item" onClick={() => scrollToRoadMap()}>
            roadmap
          </p>
          <p className="mr_m route_item" onClick={() => scrollToTeam()}>
            team
          </p>
        </div>
        <div className="nav_icons">
          <a href="https://discord.gg/Ccuqj7NP" style={{ color: "white" }}>
            <FaDiscord className="icon mr_m" />
          </a>
          <a
            href="https://mobile.twitter.com/notboredapes"
            style={{ color: "white" }}
          >
            <AiOutlineTwitter className="icon mr_m" />
          </a>
        </div>
      </div>

      {/* nav-mob  */}
      <div className="nav_mob">
        <ConnectButton />
        <HiOutlineMenuAlt3
          className="nav_mob__icon"
          onClick={() => setOpen(!open)}
        />
        {open && (
          // <div className={open ? "nav_mob__menu acitve" : "nav_mob__menu"}>
          <div className={"nav_mob__menu"}>
            <p
              className="mr_m route_item"
              onClick={() => scrollToBuyAnApeRef()}
            >
              buy an ape
            </p>
            <p className="mr_m route_item" onClick={() => scrollToRoadMap()}>
              roadmap
            </p>
            <p className="mr_m route_item" onClick={() => scrollToTeam()}>
              team
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
