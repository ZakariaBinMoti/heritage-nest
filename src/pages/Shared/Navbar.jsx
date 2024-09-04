import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Hertiage-Nest logo.webp"

const Navbar = () => {
  const navLinks1 = (
    <>
      <NavLink to="/"><li><a>Home</a></li></NavLink>
      <NavLink to="/buy-sell"><li><a>Buy & Sell</a></li></NavLink>
      <NavLink to="/properties"><li><a>Properties</a></li></NavLink>
      <NavLink to="/about-us"><li><a>About Us</a></li></NavLink>
    </>
  );
  const navLinks2 = (
    <>
      <NavLink><li><a>Manage Rentals</a></li></NavLink>
      <NavLink><li className="font-medium"><a>Sign in</a></li></NavLink>
    </>
  );
  return (
    <div className=" bg-[#ECF5FF]">
      <div className="navbar max-w-[1216px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {navLinks1}
            </ul>
          </div>
          <ul className="flex gap-8 cursor-pointer font-normal text-[18px]">{navLinks1}</ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link to="/"><a><img className="h-[80px]" src={logo} alt="" /></a></Link>
        </div>
        <div className="navbar-end">
         <ul className="flex gap-8 cursor-pointer text-[18px]" >{navLinks2}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
