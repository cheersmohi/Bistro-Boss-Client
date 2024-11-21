import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: `${item.name} has been deleted`,
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle heading='Manage All Items' subHeading='Hurry Up ?' />

      <div>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td> {index + 1} </td>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <img src={item.image} alt='Avatar Tailwind CSS Component' />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'>Hart Hagerty</div>
                      </div>
                    </div>
                  </td>
                  <td> {item.name}</td>
                  <td className='text-red-500'>${item.price}</td>
                  <td>
                    {" "}
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className='btn  bg-current btn-xl'>
                        <FaEdit className='text-orange-600 text-2xl' />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-ghost btn-lg'>
                      <FaTrashAlt className='text-red-600' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
