
import { Outlet, Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        Generation Thailand React - Assessment
      </h1>

      <ul className="flex gap-4 justify-center">
        <li>
          <Link to="/user" className="hover:text-yellow-400">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition cursor-pointer">
              User Home Section
            </button>
          </Link>
        </li>
        <li>
          <Link to="/admin" className="hover:text-yellow-400">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition cursor-pointer">
              Admin Home Section
            </button>
          </Link>
        </li>
      </ul>
    </div>
    
    </>
  )
}
export default Hero