import React from 'react';
import AuthenticationButton from './Authentication-button'
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom";

const Nav = () => {
  const { user  } = useAuth0();
  const [navbar, setNavbar] = React.useState(false);
  return (

    <nav className="justify-between bg-forest  mx-auto w-full md:items-center md:flex text-white">
        <div>
            <div className="justify-self-start flex items-center justify-between py-3 md:py-5 md:block">
              <div className="self-start flex flex-row ...">
              <Link to="/"><img alt="seeds by time logo" className="object-scale-down h-12 w-12"
              src="https://res.cloudinary.com/de2i2agjs/image/upload/v1668648376/Seeds_By_Time-1_5_dautep.png"></img></Link>
                <Link to="/"><h2 className="pt-1 text-2xl text-white">Seeds by Time</h2></Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                      {/* the hamburger button is made here */}
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-white hover:text-indigo-200">
                    </li>

                    {/* <li className="text-white hover:text-indigo-200">

                    </li> */}

                </ul>

                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <li className="text-white hover:text-indigo-200">
                            <Link to="/about">About</Link>
                        </li>
                  {navbar ? <AuthenticationButton /> : null}
                </div>
            </div>
        </div>
        <div className=" hidden space-x-2 md:flex items-center">
        <div className="pb-2 pr-3 text-white hover:text-indigo-200">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="pb-2 pr-3 text-white hover:text-indigo-200">
                      {user ? <Link to="/myplants">My Plants</Link> : null}
                    </div>
                    <div className="pr-2">
        <AuthenticationButton />
        </div>
        </div>
    </nav>

/* <div className="nav">
  <div className="nav-header">
    <div className="nav-title">
      <Link to="/">Seeds By Time</Link>

    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div className="nav-links">
    <a href="//github.io/jo_geek" target="_blank">About</a>
    <AuthenticationButton />
    {user ? <Link to="/myplants">My Plants</Link> : null}
  </div>
  </div> */
  )
}

export default Nav;