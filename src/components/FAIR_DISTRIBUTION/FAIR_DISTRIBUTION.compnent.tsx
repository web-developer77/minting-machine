import Pharagraph from "../../components/Paragraph/Paragraph.component";
import { Grid } from "@material-ui/core";
import ImgsContainer from "../../components/ImgsContainer/ImgsContainer.component";
import ape1 from "../../imgs/ape1.png";
import ape2 from "../../imgs/ape2.png";
import ape3 from "../../imgs/ape3.png";
import ape4 from "../../imgs/ape4.png";
interface Props {
  leftItem?: any;
  rightItem?: any;
}

const FAIR_DISTRIBUTION: React.FC<Props> = ({ leftItem, rightItem }) => {
  const p1: [String] = [
    "BAYC is a collection of 5,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.",
  ];
  const imgs: string[] = [ape1, ape2, ape3, ape4];
  const title1 = (
    <h1>
      WELCOME TO THE <br />
      BORED APE YACHT CLUB
    </h1>
  );
  return (
    <div className="">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Pharagraph title={title1} paragraph={p1} />
          {leftItem}
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImgsContainer imgs={imgs} />
          {rightItem}
        </Grid>
      </Grid>
    </div>
  );
};
export default FAIR_DISTRIBUTION;
