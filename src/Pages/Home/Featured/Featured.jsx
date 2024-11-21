import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import "./Featured.css"

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-6 my-4' >
      <SectionTitle subHeading="Check it Out" heading=" Featured Item" />
      <div className='md:flex justify-center items-center bg-opacity-20 bg-slate-500 pb-20 pt-12 px-36 '>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className='md:ml-10'>
          <p>Aug 20, 2024</p>
          <p className="uppercase"> Where can i get some ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe at
            error, voluptates, magnam neque dignissimos repellendus et
            temporibus eaque! Vero magni facilis omnis, velit laboriosam nulla
            sequi atque maxime libero officiis tempora repellat cupiditate ullam
            quisquam praesentium iure id ad in incidunt animi repellendus
            dignissimos cumque. Dicta rerum, cumque repellat.
          </p>
          <button className='btn btn-outline border-0 border-b-4  mt-4 text-green-500'> Order Now </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
