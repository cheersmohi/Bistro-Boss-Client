import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/slide5.jpg'

const ChefMenu = () => {
  return (
    <section>
      <SectionTitle subHeading="---Should Try ---" heading="CHEF RECOMMENDS" />

      <div className="flex">
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Caeser Salad</h2>
            <p className="text-center">Lettuce, Eggs, Pamesan Cheese, Chicken Broast Filliets</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-center btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Caeser Salad</h2>
            <p className="text-center">Lettuce, Eggs, Pamesan Cheese, Chicken Broast Filliets</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-center btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Caeser Salad</h2>
            <p className="text-center">Lettuce, Eggs, Pamesan Cheese, Chicken Broast Filliets</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-center btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChefMenu;