import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/Navbar";


const Main = () => {
  const location = useLocation()
  console.log(location)
  const headerFooter = location.pathname.includes('login') || location.pathname.includes('signup')

  return (
    <div>
    {headerFooter || <Navbar/>}
    <Outlet/>
    {headerFooter || <Footer/>}
    </div>
    )
}

export default Main;
