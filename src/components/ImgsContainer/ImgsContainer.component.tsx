import "./ImgsContainer.styles.css";
interface Props {
  imgs: string[];
}

const ImgsContainer: React.FC<Props> = ({ imgs }) => {
  return (
    <div className="row">
      {imgs.map((img, n) => (
        <img key={n} src={img} alt="img" className="imgsContianer_img" />
      ))}
    </div>
  );
};
export default ImgsContainer;
