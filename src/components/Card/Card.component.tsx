import "./card.styles.css";
interface Props {
  img: string;
  text: string;
}

const Card: React.FC<Props> = ({ img, text }) => {
  return (
    <div className="card">
      <img src={img} alt="cardImg" className="cardImg" />
      <p>{text}</p>
    </div>
  );
};
export default Card;
