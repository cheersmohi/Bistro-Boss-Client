import { NavLink, Outlet } from "react-router-dom";
import {
  FaAddressBook,
  FaBook,
  FaBriefcase,
  FaCalendar,
  FaCommentDots,
  FaFileContract,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  //TODO- get is value from the database
  // const  isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className='flex'>
      <div className='w-64 min-h-screen bg-orange-400'>
        <ul className='menu p-6'>
          {isAdmin ? (
            <>
              <li>
                <NavLink to='/dashboard/adminHome'>
                  <FaHome />
                  ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addItems'>
                  {" "}
                  <FaUtensils /> ADD ITEMS
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to='/dashboard/manageItems'>
                  {" "}
                  <FaList /> MANAGE ITEMS
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to='/dashboard/bookings'>
                  {" "}
                  <FaBook /> MANAGE BOOKINGS
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to='/dashboard/users'>
                  <FaUsers />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/dashboard/userHome'>
                  {" "}
                  <FaCalendar />
                  User Home{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to='/dashboard/review'>
                  {" "}
                  <FaCommentDots /> Add Review{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to='/dashboard/carts'>
                  {" "}
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to='/dashboard/paymentHistory'>
                  <FaAddressBook />
                  Payment Information
                </NavLink>
              </li>
            </>
          )}
          {/*shared nav links*/}

          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'>
              <FaBriefcase />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/contact'>
              <FaFileContract />
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='flex-1 p-8'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
