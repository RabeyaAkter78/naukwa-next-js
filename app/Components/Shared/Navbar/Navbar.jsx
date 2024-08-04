import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="absolute w-full">
      <div
        className="navbar bg-[#868788] rounded-2xl text-[#F8FAFC]  px-10 container mt-10 mb-10
      mx-auto "
      >
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
              className="menu menu-sm dropdown-content bg-[#334A55] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Our Editors</a>
              </li>
              <li>
                <a>How To order</a>
              </li>
              <li>
                <div className="bg-white text-black">
                  <p className="bg-[#8ABA51] h-5 w-5 rounded-full"></p>
                  <p>Editor</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost text-xl">
            <Image src="/Vector.png" alt="" height={20} width={20}></Image>
            <p>Redakcja Naukowa</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Our Editors</a>
            </li>
            <li>
              <a>How To order</a>
            </li>
            <li>
              <div className="bg-white text-black rounded-3xl  justify-center items-center">
                <p className="bg-[#8ABA51] h-5 w-5 rounded-full"></p>
                <p>Editor</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className=" px-2 py-1 outline flex gap-2 justify-center items-center rounded">
            <FaRegCircleUser className="h-7 w-5" />
            <p>Join Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
