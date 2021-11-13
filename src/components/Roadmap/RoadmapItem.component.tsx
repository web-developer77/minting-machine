import "./Roadmap.styles.css";

interface Props {
  percentage: string;
  text: string;
}

const RoadmapItem: React.FC<Props> = ({ percentage, text }) => {
  return (
    <div className="roadmap_item">
      <p className="mr_m percentage">{percentage} </p>
      <p className="roadmap_text">{text} </p>
    </div>
  );
};
export default RoadmapItem;
