import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>{" "}
      </Helmet>{" "}
      <Cover img={menuImg} title="Our Menu" />
      <SectionTitle subHeading="Don't Miss" heading="Today's offer" />
      <MenuCategory items={offered} />
      <MenuCategory items={dessert} img={dessertImg} title="dessert" />
      <MenuCategory items={pizza} img={pizzaImg} title="pizza" />
      <MenuCategory items={soup} img={soupImg} title="soup" />
      <MenuCategory items={salad} img={saladImg} title="salad" />
    </div>
  );
};

export default Menu;
