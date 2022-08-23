import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Navbar = ({ communityName, preview, login, user }) => {
  let image;
  if (user) {
    image = user.photoURL;
  }

  return (
    <div>
      <div className="navbar max-w-[82rem] mx-auto xl:py-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Founder</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <p className="btn btn-ghost normal-case text-xl w-72">
              <img className="h-full mr-2" src={Logo} alt="" />
              {communityName || "Coder Community"}
            </p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Founder</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={login}
            className="bg-violet-500 hover:bg-violet-600 duration-300 relative hidden py-3 lg:flex text-white rounded-full px-10"
          >
            {user ? (
              <div className="capitalize  font-normal">
                <img
                  src={image}
                  className="absolute top-0 left-0 h-full border-4 rounded-full border-violet-500"
                  alt="userImage"
                />
                <p className="ml-4 -mr-6">{user.displayName}</p>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
