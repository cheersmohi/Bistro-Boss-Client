import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle heading="from our menu" subHeading="Popular items" />

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item.__id} item={item} />
        ))}
      </div>

      <div classname="">
        <button className="btn btn-outline border-0 border-b-4  mt-4 text-green-500">
          {" "}
          View Full Menu{" "}
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
