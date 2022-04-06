import react from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Blog from "../components/Blog";
import Choose from "../components/Choose";
import { Helmet } from "react-helmet-async";

const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Ayurvedic Destination For Your Health</title>
        <meta
          name="description"
          content="We deal with various ayurvedic remedies and exercises to maintain the balance between your hectic life and health. Ayurveda is the ultimate prescription for a lifetime healthy body build."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Banner />
      <Feature />
      <Blog card={props.card} />
      <Choose />
    </>
  );
};

export default Home;
