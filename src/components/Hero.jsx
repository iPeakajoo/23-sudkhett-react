
import { Outlet, Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
    <div className=" bg-gray-200 flex flex-col justify-center items-center p-30">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        Generation Thailand React - Assessment
      </h1>

      <ul className="flex gap-4 justify-center">
        <li>
          <Link to="/user">
            <button className="px-8 py-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition cursor-pointer text-xl">
              User Home Section
            </button>
          </Link>
        </li>
        <li>
          <Link to="/admin" className="hover:text-yellow-400">
            <button className="px-8 py-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition cursor-pointer text-xl">
              Admin Home Section
            </button>
          </Link>
        </li>
        <li>
          <Link to="/admin1" className="hover:text-yellow-400">
            <button className="px-8 py-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition cursor-pointer text-xl">
              Admin1 Home Section
            </button>
          </Link>
        </li>
      </ul>
    </div>

    </div>
     
  
    
    </>
  )
}
export default Hero