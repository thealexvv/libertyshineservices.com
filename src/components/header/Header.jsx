import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isAboveMediaScreen = useMediaQuery('(min-width:1160px)');
  useEffect(() => {
    const onKeyPress = (e) => {
      console.log(e);
      const keyCode = e.code;

      if (!isAboveMediaScreen && keyCode === 'Escape') {
        setOpenMenu(false);
      }
    };
    window.addEventListener('keydown', onKeyPress);

    return () => window.removeEventListener('keydown', onKeyPress);
  }, []);

  // ! animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const navRef = useRef();
  useOnClickOutside(navRef, () => setOpenMenu(false));

  return (
    <nav className="w-full flex fixed justify-between gap-7 py-5 px-16 bg-primary-100 z-[999]">
      <div>
        {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
        <Link
          className="cursor-pointer font-bold text-lg md:text-xl text-secondary-400"
          to="/"
        >
          LIBERTY SHINE SERVICES
        </Link>
      </div>

      {isAboveMediaScreen && (
        <div className="">
          {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
          <span className="flex items-center font-bold">
            <FaLocationDot
              fontSize={25}
              style={{
                marginRight: 10,
              }}
              fill="rgb(243, 189, 28)"
            />
            MANATEE, SARASOTA, HILLSBOROUGH COUNTIES & NEW JERSEY
          </span>
        </div>
      )}

      {/* Desktop nav */}
      {isAboveMediaScreen ? (
        <div className="">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `text-secondary-400` : ''
                }
              >
                HOME
              </NavLink>
            </li>

            {/* {pathname === '/' && ( */}
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? `text-secondary-400` : ''
                }
              >
                SERVICES
              </NavLink>
            </li>
            {/* )} */}
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? `text-secondary-400` : ''
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/questions"
                className={({ isActive }) =>
                  isActive ? `text-secondary-400` : ''
                }
              >
                FAQ’S
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <button
          className="rounded-full bg-secondary-400 p-2"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <RxHamburgerMenu className="h-6 w-6 text-black font-bold" />
        </button>
      )}

      {/* Mobile nav */}
      {!isAboveMediaScreen && openMenu && (
        <div className="absolute top-0 left-0 h-screen w-full">
          <motion.div
            ref={navRef}
            initial="hidden"
            whileInView="visible"
            variants={container}
            className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-200 text-black drop-shadow-xl"
          >
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setOpenMenu((prev) => !prev)}>
                <RxCross2 className="text-gray-200 w-9 h-9" />
              </button>
            </div>
            {/* ! MENU ITEMS ! */}
            <div className="flex text-center flex-col gap-10">
              <ul className="flex flex-col gap-10 text-2xl">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `text-secondary-400` : ''
                    }
                  >
                    HOME
                  </NavLink>
                </li>

                {/* {pathname === '/' && ( */}
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? `text-secondary-400` : ''
                    }
                  >
                    SERVICES
                  </NavLink>
                </li>
                {/* )} */}
                <li>
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive ? `text-secondary-400` : ''
                    }
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/questions"
                    className={({ isActive }) =>
                      isActive ? `text-secondary-400` : ''
                    }
                  >
                    FAQ’S
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Locations */}
            <ul className="text-white mt-56 flex items-center flex-col gap-8">
              {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
              <li>
                <motion.span
                  className="flex items-center font-bold"
                  variants={item}
                >
                  <FaLocationDot
                    fontSize={25}
                    style={{
                      marginRight: 10,
                    }}
                    fill="rgb(243, 189, 28)"
                  />{' '}
                  MANATEE COUNTY
                </motion.span>
              </li>
              <li>
                <motion.span
                  className="flex items-center font-bold"
                  variants={item}
                >
                  <FaLocationDot
                    fontSize={25}
                    style={{
                      marginRight: 10,
                    }}
                    fill="rgb(243, 189, 28)"
                  />{' '}
                  SARASOTA COUNTY
                </motion.span>
              </li>
              <li>
                <motion.span
                  className="flex items-center font-bold"
                  variants={item}
                >
                  <FaLocationDot
                    fontSize={25}
                    style={{
                      marginRight: 10,
                    }}
                    fill="rgb(243, 189, 28)"
                  />{' '}
                  HILLSBOROUGH COUNTY
                </motion.span>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Header;
