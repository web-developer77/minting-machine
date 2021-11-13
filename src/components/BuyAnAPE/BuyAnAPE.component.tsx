import Mint from "../Mint/Mint";
import "./BuyAnAPE.styles.css";

const BuyAnAPE = ({ buyAnApeRef }: any) => {
  return (
    <>
      <div className="BuyAnAPE_container" ref={buyAnApeRef}>
        <h2 className="BuyAnAPE_title">BUY AN APE</h2>
        <p className="BuyAnAPE_p">MINT YOUR APE FOR 1 SOL.</p>
        <Mint />
      </div>
    </>
  );
};
export default BuyAnAPE;
