import "./Paragraph.styles.css";
interface Props {
  title: any;
  paragraph?: String[];
  customComp?: any;
}

const Pharagraph: React.FC<Props> = ({ title, paragraph, customComp }) => {
  return (
    <div style={{ margin: "0", width: "auto" }}>
      {/* <h1 className="title">{title} </h1> */}
      {title}
      {paragraph?.map((i, n) => (
        <p key={n} style={{ textAlign: "justify", fontSize: "1.2rem" }}>
          {i}
        </p>
      ))}
      {customComp}
    </div>
  );
};
export default Pharagraph;
