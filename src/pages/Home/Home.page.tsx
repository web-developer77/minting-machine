import HomeRow from "../../components/HomeRow/HomeRow.component"
import "./Home.styles.css"
import mysteryAPE from "../../imgs/Arrow/ARROW_01.png"
import toilet from "../../imgs/Sponsor/DeFiHood_Sponsor_Etherial Art.png"
import styled from "styled-components"
import Pharagraph from "../../components/Paragraph/Paragraph.component"
import ImgsContainer from "../../components/ImgsContainer/ImgsContainer.component"
import {
  cardsArr,
  imgs,
  imgsArr2,
  teamImgs,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
} from "./data"
import BuyAnAPE from "../../components/BuyAnAPE/BuyAnAPE.component"
import Card from "../../components/Card/Card.component"
import Roadmap from "../../components/Roadmap/Roadmap.component"
import MainButton from "../../components/MainButton/MainButton.component"
import Footer from "../../components/Footer/Footer.component"
import * as anchor from "@project-serum/anchor"
import Timer from "../../components/Timer/Timer"
const CounterText = styled.span``

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  treasury: anchor.web3.PublicKey
  txTimeout: number
  buyAnApeRef: any
  roadMapRef: any
  teamRef: any
  scrollToHome: any
}

const Home = (props: HomeProps) => {
  const title1 = <h1>EMPOWERING ARTISTS AND CREATORS</h1>
  const title2 = (
    <div className="">
      <h1
        style={{ fontWeight: "normal", color: "yellow", fontStyle: "italic" }}
      >
        What will DeFiHood do with the money it raises? <br />{" "}
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem", marginTop: "-1.5rem" }}>
        
      </p>{" "}
    </div>
  )
  const title3 = <h1 className="p_title">What is DeFiHood?</h1>
  const title4 = <h1 className="p_title">WELCOME</h1>
  const title5 = <h1 className="p_title">10% donated to charity </h1>
  const title6 = <h1 className="p_title">ROADMAP ACTIVATIONS</h1>
  const title7 = <h1 className="p_title">COMMUNITY TOOLS</h1>
  const title8 = <h1 className="p_title">THE TEAM</h1>

  const homeRow_2_Right = (
    <div className="homeRow_2_Right">
      
    </div>
  )
  const btns = (
    <div className="btns">
      <MainButton title="NFTEXP.IO" />
      <MainButton title="RARITY.TOOLS" />
    </div>
  )
  const p8 = (
    <div className="">
      <p>
        {/* <span style={{ color: "yellow" }}>GARGAMEL.</span> SNIFFS COCAINE. */}
        <span style={{ color: "yellow" }}>@Hooded MonkeMaster - </span>{" "}Development Head <br/>
        Twitter - http://twitter.com/eeliotapia <br/> 
        Instagram - http://instagram.com/3liotapia <br/>
        Youtube - http://youtube.com/eeliioo
      </p>
      <p>
        {/* <span style={{ color: "yellow" }}> GORDON GONER.</span> STILL A LEVERAGE
        ADDICT. */}
        <span style={{ color: "yellow" }}>@Hooded Andypandy1 - </span>{" "}CommunityManager/Marketing <br/>
        Twitter - http://twitter.com/acr19961 <br/>
        Instagram - http://instagram.com/andrescorralr <br/>
      </p>

      <p>
        {/* <span style={{ color: "yellow" }}> EMPEROR TOMATO KETCHUP.</span>NFT
        MAXIMALIST. */}
        <span style={{ color: "yellow" }}> @BullTrader - </span> Artist <br/>
        Twitter - https://twitter.com/carlossgar10 <br/>
        Instagram - http://instagram.com/cgarciaa10
      </p>
      <p>
        <span style={{ color: "yellow" }}>@DeFiHoodNFT - </span> Professionaltrader/Educator <br/>
        Twitter - https://twitter.com/DefihoodNFT <br/>
        Instagram - http://instagram.com/nicolascastrignanocresto <br/>
        Youtube - https://youtube.com/channel/UC0nt-zY3isvJz8onVBkjfLA
      </p>
    </div>
  )
  return (
    <>
      <div className="home_container">
        <HomeRow
          leftItem={<Pharagraph title={title1} paragraph={p1} />}
          rightItem={<ImgsContainer imgs={imgs} />}
        />
        <HomeRow
          leftItem={<Pharagraph title={title2} paragraph={p2} />}
          rightItem={homeRow_2_Right}
        />
        <Timer mintStartAt={1633770000} />
        {/* <BuyAnAPE
          candyMachineId={props.candyMachineId}
          config={props.config}
          connection={props.connection}
          startDate={props.startDate}
          treasury={props.treasury}
          txTimeout={props.txTimeout}
          buyAnApeRef={props.buyAnApeRef}
        /> */}
        <hr style={{ opacity: ".4" }} />
        <HomeRow
          leftItem={<Pharagraph title={title3} paragraph={p3} />}
          rightItem={<img src={mysteryAPE} alt="mysteryAPE" className="gif" />}
        />
        <hr style={{ opacity: ".4" }} />
        <HomeRow leftItem={<Pharagraph title={title4} paragraph={p4} />} />
        <div className="cards_container">
          {cardsArr.map((i, n) => (
            <Card key={n} img={i.img} text={i.text} />
          ))}
        </div>
        <hr style={{ opacity: ".4" }} />
        <HomeRow
          leftItem={<Pharagraph title={title5} paragraph={p5} />}
          rightItem={<img src={toilet} alt="toilet" className="toiletImg" />}
          smL={9}
          smR={2}
        />
        <hr style={{ opacity: ".4" }} />
        <HomeRow
          leftItem={<Pharagraph title={title6} paragraph={p6} />}
          smL={9}
          smR={2}
          roadMapRef={props.roadMapRef}
          isRoadMap={true}
        />
        <Roadmap />
        <hr style={{ opacity: ".4" }} />
        {/* <HomeRow
          leftItem={<Pharagraph title={title7} paragraph={p7} />}
          rightItem={btns}
          smL={8}
          smR={4}
        />
        <hr style={{ opacity: ".4" }} /> */}
        <HomeRow
          leftItem={<Pharagraph title={title8} customComp={p8} />}
          rightItem={<ImgsContainer imgs={teamImgs} />}
          teamRef={props.teamRef}
          isTeam={true}
        />
        {/* <h4 className="home_address">
          VERIFIED SMART CONTRACT ADDRESS:
          <span>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</span>
        </h4> */}
        <hr />
        <Footer scrollToHome={props.scrollToHome} />
        <br />
      </div>
    </>
  )
}
export default Home
