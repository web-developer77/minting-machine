import "./MainButton.styles.css";
interface Props {
  title: string;
}

const MainButton: React.FC<Props> = ({ title }) => {
  return <button className="mainBtn"> {title} </button>;
};
export default MainButton;
