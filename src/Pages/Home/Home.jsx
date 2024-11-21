import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefMenu from "./ChefMenu/ChefMenu";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
    <Helmet>
        <title>Bisto  Boss | Home</title>
      </Helmet>
      <Banner/>
      <Category/>
      <PopularMenu/>
      <ChefMenu/>
      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;
