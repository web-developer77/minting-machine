import { Grid } from "@material-ui/core";
import "./HomeRow.styles.css";
interface Props {
  leftItem?: any;
  rightItem?: any;
  smR?: any;
  smL?: any;
  roadMapRef?: any;
  isRoadMap?: any;
  teamRef?: any;
  isTeam?: any;
}

const HomeRow: React.FC<Props> = ({
  leftItem,
  rightItem,
  smL = 6,
  smR = 6,
  roadMapRef,
  isRoadMap,
  teamRef,
  isTeam,
}) => {
  isRoadMap && console.log({ roadMapRef });
  isRoadMap && console.log({ isRoadMap });
  let ref;
  if (isRoadMap) {
    ref = roadMapRef;
  } else {
    ref = teamRef;
  }

  return (
    <div style={{ paddingRight: "1rem" }} ref={ref}>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={smL}>
          {leftItem}
        </Grid>
        <Grid item xs={12} sm={smR}>
          {rightItem}
        </Grid>
      </Grid> */}
      <div className="homeRow_container">
        <div className="homeRow_left"> {leftItem}</div>
        <div className="homeRow_right"> {rightItem}</div>
      </div>
    </div>
  );
};
export default HomeRow;
