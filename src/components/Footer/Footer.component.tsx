import logo from "../../imgs/logo.jpeg";
import "./footer.styles.css";

import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  scrollToHome: any;
}

const Footer: React.FC<Props> = ({ scrollToHome }) => {
  return (
    <div className="footer">
      {/* <div className="">
        <p className="fotter_text">GET ON THE LIST</p>
        <div className="footer_input_container">
          <input
            type="text"
            className="footer_input"
            placeholder="Email Address"
          />
          <div className="input_icon_container">
            <BsArrowRight className="input_icon" />
          </div>
        </div>
      </div> */}
      <img
        src={logo}
        alt="footer_logo"
        className="footer_logo"
        onClick={() => scrollToHome()}
      />
      <div className="footer_icons">
        <a href="https://discord.gg/Ccuqj7NP" style={{ color: "white" }}>
          <FaDiscord className="icon mr_m" />
        </a>
        <a
          href="https://mobile.twitter.com/notboredapes"
          style={{ color: "white" }}
        >
          <AiOutlineTwitter className="icon  mr_m" />
        </a>
        <p style={{ fontSize: ".8rem", color: "yellow" }}>
          © 2021 Yuga Labs LLC
        </p>
      </div>
    </div>
  );
};
export default Footer;
